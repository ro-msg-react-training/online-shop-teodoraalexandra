import React from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../Actions/UpdateProduct';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import { Link } from 'react-router-dom'
import productsUrl from "../API/ProductsUrl";
import TextField from '@material-ui/core/TextField';
import { AppState } from "../store";


const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class UpdateProduct extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            category: '',
            name: '',
            price: '',
            open: false
        }

        fetch(productsUrl + "/" + this.props.match.params.id)
            .then(response => response.json())
            .then(data => this.setState({ category: data.category, name: data.name, price: data.price }));

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleClick = () => {
        this.setState({open: true});
    };

    handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open: false});
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const product = {
            id: this.state.id,
            category: this.state.category,
            name: this.state.name,
            price: this.state.price,
        }

        // Call action
        this.props.updateProduct(product);

        // Send a successful message
        this.handleClick();
    }

    render() {
        return (
            <Container>
                <br/>
                <Typography variant="h3" color="primary">Update this product</Typography>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <TextField required id="standard-basic"
                               name="category"
                               onChange={this.onChange}
                               value={this.state.category}
                               label="Category"/><br/>
                    <TextField required id="standard-basic"
                               name="name"
                               onChange={this.onChange}
                               value={this.state.name}
                               label="Name"/><br/>
                    <TextField required id="standard-number"
                               name="price"
                               onChange={this.onChange}
                               value={this.state.price}
                               label="Price"
                               type="number"/><br/><br/>

                    <Link to='/products' className="link"><Button size="small" color="primary">Cancel</Button></Link>
                    <button type="submit" className="submit-button">Update</button>
                </form>

                <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        Your product has been updated successfully!
                    </Alert>
                </Snackbar>
            </Container>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    updatedProduct: state.updatedProduct.updatedProduct,
    isLoading: state.updatedProduct.isLoading
});
export default connect(mapStateToProps, { updateProduct })(UpdateProduct)