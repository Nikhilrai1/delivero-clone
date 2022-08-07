export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "short description",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image of Restuarant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of Restuarant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of Restuarant",
    },
    {
      name: "address",
      type: "string",
      title: "Restuarant Address",
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a rating from (1-5 starts)",
      // validation: (Rule) =>
      //   Rule.required()
      //     .min(1)
      //     .max(5)
      //     .error("Please enter a value between 1 and 5"),
    },
    {
      name: "type",
      type: "string",
      title: "category",
      // validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{type: "category"}]
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{type: "reference", to: [{type: "dish"}]}]
    }
  ],
}
