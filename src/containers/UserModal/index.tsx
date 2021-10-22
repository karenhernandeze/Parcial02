import React from "react";
import UserInfo from "../../components/UserInfo/index";
import User from "../../types/User";

interface CartProps {
    isModalVisible: boolean;
    closeModal(event: any): void
    user: User;
}

/**
 * Header Container
 * @extends {Component<Props>}
 */
class CartModal extends React.Component<CartProps, {}> {

    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        return (
            <UserInfo
                open={this.props.isModalVisible}
                handleClose={this.props.closeModal}
                user={this.props.user}
            />
        )
    }
}

export default CartModal;