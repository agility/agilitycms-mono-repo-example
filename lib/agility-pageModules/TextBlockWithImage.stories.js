import React from "react";

import { TextBlockWithImage } from "./TextBlockWithImage";

export default {
  title: "Agility Page Modules/TextBlockWithImage",
  component: TextBlockWithImage,
  argTypes: {},
};

const Template = (args) => <TextBlockWithImage {...args} />;

export const ImageLeft = Template.bind({});

ImageLeft.args = {
  primary: true,
  module: {
    fields: {
      title: "Example Text Block with Image",
      tagline: "Storybook + Agility CMS",
      primaryButton: {
        text: "Read our blog",
        href: "/blog",
        target: "_self",
      },
      image: {
        url: "https://cdn.aglty.io/blog-starter-2021-template/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash%201.jpg",
        label: "A book on a table",
      },
      imagePosition: "left",
    },
  },
};

export const ImageRight = Template.bind({});

ImageRight.args = {
  module: {
    fields: {
      title: "Example Text Block with Image",
      tagline: "Storybook + Agility CMS",
      primaryButton: {
        text: "Read our blog",
        href: "/blog",
        target: "_self",
      },
      image: {
        url: "https://cdn.aglty.io/blog-starter-2021-template/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash%201.jpg",
        label: "A book on a table",
      },
      imagePosition: "right",
    },
  },
};
