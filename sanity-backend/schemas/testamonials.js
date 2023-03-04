// export default {
//   name: 'testimonials',
//   title: 'Testimonials',
//   type: 'document',
//   fields: [
//     {
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//     },
//     {
//       name: 'company',
//       title: 'Company',
//       type: 'string',
//     },
//     {
//       name: 'image',
//       title: 'Image',
//       type: 'array',
//       of: [{type: 'socials'}],
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: 'feedback',
//       title: 'Feedback',
//       type: 'string',
//     },
//   ],
// }

export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'profile',
      title: 'Profile',
      type: 'url',
    },
    {
      name: 'imgurl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    },
  ],
}
