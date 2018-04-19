//To define all general style here so you can use them in any file

import { Platform, StyleSheet, Text, View } from "react-native";

import React, { Component } from "react";
export const CommonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center"
  
  },
  textHeader: {
    marginTop: 50,
    marginBottom: 50,
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
