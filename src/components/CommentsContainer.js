import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Abhishek Ranjan",
    text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    name: "Abhishek Ranjan",
    text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Abhishek Ranjan",
        text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        name: "Abhishek Ranjan",
        text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [
          {
            name: "Abhishek Ranjan",
            text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
            replies: [],
          },
          {
            name: "Abhishek Ranjan",
            text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
            replies: [
              {
                name: "Abhishek Ranjan",
                text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
                replies: [
                  {
                    name: "Abhishek Ranjan",
                    text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
                    replies: [],
                  },
                  {
                    name: "Abhishek Ranjan",
                    text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
                    replies: [],
                  },
                ],
              },
              {
                name: "Abhishek Ranjan",
                text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Abhishek Ranjan",
    text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [],
  },
  {
    name: "Abhishek Ranjan",
    text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Abhishek Ranjan",
        text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [],
      },
      {
        name: "Abhishek Ranjan",
        text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [],
      },
      {
        name: "Abhishek Ranjan",
        text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [],
      },
    ],
  },
  {
    name: "Abhishek Ranjan",
    text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [],
  },
  {
    name: "Abhishek Ranjan",
    text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
