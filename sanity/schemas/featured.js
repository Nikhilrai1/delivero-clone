export default {
    name: 'featured',
    type: 'document',
    title: 'Featured Menu Categories',
    fields: [
      {
        name: "name",
        type: "string",
        title: "Featured Category name",
        // validation: (Rule) => Rule.required(),
      },
      {
        name: "short_description",
        type: "string",
        title: "short description",
        // validation: (Rule) => Rule.max(200),
      },
      {
        name: "restaurants",
        type: "array",
        title: "Restuarants",
        of: [{type: "reference", to: [{type: "restaurant"}]}]
      },
    ],
  }
  