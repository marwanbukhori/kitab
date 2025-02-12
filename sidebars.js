/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //   tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Cloud Users",
      items: ["aws/congratulations"],
    },
    {
      type: "category",
      label: "AWS",
      items: ["aws/congratulations"],
    },
    {
      type: "category",
      label: "Microservices",
      items: ["aws/congratulations"],
    },
    {
      type: "category",
      label: "Docker",
      items: ["aws/congratulations"],
    },
    {
      type: "category",
      label: "Architecture",
      items: ["aws/congratulations"],
    },
    // {
    //   type: "category",
    //   label: "Tutorial",
    //   items: ["tutorial-basics/create-a-document"],
    // },
  ],
};

export default sidebars;
