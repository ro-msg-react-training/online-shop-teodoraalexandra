import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../Actions/CreateProduct';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { AppState } from "../store";


const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class AddProduct extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            name: '',
            price: '',
            open: false
        }

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
            category: this.state.category,
            name: this.state.name,
            price: this.state.price
        }

        // Call action
        this.props.createProduct(product);

        // Send a successful message
        this.handleClick();
    }

    render() {
        return (
            <Container>
                <br/>
                <Typography variant="h3" color="primary">Add new product</Typography>
                <br/>
                <form onSubmit={this.onSubmit} >
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
                    <button type="submit" className="submit-button">Save</button>
                </form>

                <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        Your product has been added successfully!
                    </Alert>
                </Snackbar>
            </Container>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    newProduct: state.addedProduct.addedProduct,
    isLoading: state.addedProduct.isLoading
});
export default connect(mapStateToProps, { createProduct })(AddProduct)