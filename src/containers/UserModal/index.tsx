import React from "react";
import UserInfo from "../../components/UserInfo/index";
import User from "../../types/User";

interface UserProps {
    isModalVisible: boolean;
    closeModal(event: any): void
    user: User;
}

/**
 * User Modal Container
 * @extends {Component<Props>}
 */
class UserModal extends React.Component<UserProps, {}> {

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

export default UserModal;