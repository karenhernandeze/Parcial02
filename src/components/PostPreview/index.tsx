import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import "./style.css";
import PostItem from "../../types/PostItem";
import User from '../../types/User';

interface PostPreviewProps {
  post: PostItem;
  user: User;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

/**
 * Product preview elements
 * @returns ProductPreview UI elements
 */
const PostPreview: React.FC<PostPreviewProps> = (props) => {
  // if (
  //     props.post !== undefined &&
  //     props.post !== undefined
  // ) {
  //     // listPrice = props.product.childSkus[0].listPrice;
  // }

  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={`https://picsum.photos/100?${props.post.userId}`} />
          </ListItemAvatar>
          <ListItemText
            primary={props.post.title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {props.post.body}
                </Typography>
                <br/>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {props.user.username}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      <Divider variant="inset" component="li" />

    </div>
  );
};

export default PostPreview;