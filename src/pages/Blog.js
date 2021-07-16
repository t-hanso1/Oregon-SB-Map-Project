import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Header from "./Header";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Footer from "./Footer";
import post1 from "./blog-post.1.md";
import Map from "./map.js";
import "./Party Distribution.png";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const sections = [
  { title: "Political Affiliation", url: "#" },
  { title: "Gender", url: "#" },
  { title: "Age", url: "#" },
  { title: "Open Seats", url: "#" }
];

const featuredPosts = [
  {
    title: "Party Distribution",
    date: "",
    description: "",
    image: "Party Districution.png",
    imageText: "Image Text"
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text"
  }
];

const posts = [post1];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Oregon School Board Metrics" sections={sections} />
        <main>
          <Container maxWidth="sm">
            <Map />
          </Container>
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
