import React from 'react';
import Typography from '@material-ui/core/Typography';
import PostItem from "../../types/PostItem";
import User from '../../types/User';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import UserModal from '../../containers/UserModal';
import "./style.css";

interface PostPreviewProps {
  post: PostItem;
  user: User;
}

/**
 * Post preview elements
 * @returns PostPreview UI elements
 */
const PostPreview: React.FC<PostPreviewProps> = (props) => {
  var username = ''
  if (
    props.post !== undefined &&
    props.user !== undefined
  ) {
    username = props.user.username;
  }

  var id;
  if (
    props.post !== undefined &&
    props.user !== undefined
  ) {
    id = props.user.id;
  }

  const [open, setOpen] = React.useState(false);
  const handleOpenDialog = (event: any) => {
    setOpen(true);
  }

  const handleCloseDialog = (event: any) => {
    setOpen(false);
  }

  return (
    <div className={"container-preview"}>
      <Card className={"card-root"}>
        <CardMedia
          className={"card-cover"}
          image={`https://picsum.photos/100?${id}`}
          title="Live from sd album cover"
        />
        <div className={"card-details"}>
          <CardContent className={"card-content"}>
            <Typography component="h5" variant="h5">
              {props.post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography className="username-info" onClick={handleOpenDialog}>
              {username}
            </Typography>
          </CardActions>
          <UserModal isModalVisible={open} closeModal={handleCloseDialog} user={props.user}></UserModal>
        </div>

      </Card>
      <br />
      <br />
      <br />
    </div>
  );
};

export default PostPreview;
