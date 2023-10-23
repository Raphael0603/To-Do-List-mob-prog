import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Task = ({ text, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    onUpdate(editedText);
    setIsEditing(false);
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.textGuro} onPress={handleEdit}>
          <View style={styles.square}>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </TouchableOpacity>
        {isEditing ? (
          <TextInput
            style={styles.editInput}
            value={editedText}
            onChangeText={(text) => setEditedText(text)}
          />
        ) : (
          <Text style={styles.itemText}>{text}</Text>
        )}
      </View>
      {isEditing ? (
        <TouchableOpacity onPress={handleUpdate}>
          <View style={styles.updateButton}>
            <Text style={styles.updateButtonText}>✔</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.circular}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    textGuro: {
        color: 'red',
    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 30,
        height: 20,
        backgroundColor: '#00FF00',
        borderRadius: 5,
        marginRight: 15,
        alignContent: 'center',
        alignItems: 'center',
    },
    editText: {
        color: 'white',
    },
    itemText: {
        maxWidth: '80',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    editInput: {
        padding: 0,
        flex: 0.5,
    },
    updateButton: {
        backgroundColor: '#55BCF6',
        padding: 5,
        borderRadius: 5,
    },
      updateButtonText: {
        color: 'white',
      },
});

export default Task;