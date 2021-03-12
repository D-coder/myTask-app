import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase_config";

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInProgress() {
    
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
    
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }
 

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In Progress" : "Completed"}
        />
      </ListItem>

      <Button onClick={toggleInProgress} variant="outlined" style={{height:"70%",marginTop:"15px",backgroundColor:"e5e5e5"}} value= {inprogress ? "Done" : "UnDone"}> 
        {inprogress ? "Done" : "UnDone"}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );
}
