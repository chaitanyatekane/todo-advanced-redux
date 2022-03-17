import React from "react";
import { useDispatch } from "react-redux";

import {
  ListItem,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

import {
  DELETE_TODO,
  TOGGLE_COMPLETED,
  TOGGLE_IMPORTANT,
  TOGGLE_ONGOING,
} from "../redux/actions";

export default function TodoItem({
  id,
  title,
  current,
  completed,
  important,
  ongoing,
}) {
  const dispatch = useDispatch();

  let decor, textCol;
  if (current) {
    decor = "none";
    textCol = "midnightblue";
  } else if (ongoing) {
    decor = "underline";
    textCol = "Green";
  } else {
    decor = "line-through";
    textCol = "Red";
  }

  function toggleCheckBox() {
    if (!ongoing) {
      dispatch({
        type: TOGGLE_ONGOING,
        payload: {
          id,
        },
      });
    } else {
      dispatch({
        type: TOGGLE_COMPLETED,
        payload: {
          id,
        },
      });
    }
  }

  function handleDeleteClick() {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id,
      },
    });
  }

  function toggleImportant() {
    dispatch({
      type: TOGGLE_IMPORTANT,
      payload: {
        id,
      },
    });
  }

  return (
    <ListItem dense>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={completed || ongoing}
              onChange={toggleCheckBox}
              name={title}
              color={completed ? "secondary" : "green"}
            />
          }
          label={
            <Typography
              style={{
                textDecoration: decor,
                color: textCol,
              }}
            >
              {title}
            </Typography>
          }
        ></FormControlLabel>
      </FormGroup>
      <ListItemSecondaryAction>
        <IconButton onClick={toggleImportant} edge="end">
          {important ? <StarIcon /> : <StarOutlineIcon />}
        </IconButton>
        <IconButton onClick={handleDeleteClick} edge="end">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
