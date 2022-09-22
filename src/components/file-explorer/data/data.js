const nestedFolders = {
  type: 'folder',
  name: 'My Documents',
  contents: [
    {
      type: 'folder',
      name: 'My Photos',
      contents: [
        { type: 'file', name: 'mugshot.jpg' },
        {
          type: 'folder',
          name: 'Vacation',
          contents: [
            { type: 'file', name: 'family.jpg' },
            { type: 'file', name: 'scenery.jpg' },
          ],
        },
      ],
    },
    {
      type: 'folder',
      name: 'Visa application',
      contents: [
        {
          type: 'folder',
          name: 'Germany',
          contents: [
            { type: 'file', name: 'paperwork.txt' },
            { type: 'file', name: 'scans.pdf' },
            { type: 'file', name: 'authorised.pdf' },
          ],
        },
      ],
    },
    {
      type: 'folder',
      name: 'Applications',
      contents: [
        {
          type: 'file',
          name: 'whatsapp',
        },
        {
          type: 'file',
          name: 'discord',
        },
        {
          type: 'file',
          name: 'slack',
        },
      ],
    },
  ],
};

// const nestedFolders = [
//   {
//     type: 'folder',
//     name: 'My Documents',
//     contents: [
//       {
//         type: 'folder',
//         name: 'My Photos',
//         contents: [
//           { type: 'file', name: 'mugshot.jpg' },
//           {
//             type: 'folder',
//             name: 'Vacation',
//             contents: [
//               { type: 'file', name: 'family.jpg' },
//               { type: 'file', name: 'scenery.jpg' },
//             ],
//           },
//         ],
//       },
//       {
//         type: 'folder',
//         name: 'Visa application',
//         contents: [
//           {
//             type: 'folder',
//             name: 'Germany',
//             contents: [
//               { type: 'file', name: 'paperwork.txt' },
//               { type: 'file', name: 'scans.pdf' },
//               { type: 'file', name: 'authorised.pdf' },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     type: 'folder',
//     name: 'Applications',
//     contents: [
//       {
//         type: 'file',
//         name: 'whatsapp',
//       },
//       {
//         type: 'file',
//         name: 'discord',
//       },
//       {
//         type: 'file',
//         name: 'slack',
//       },
//     ],
//   },
// ];

export default nestedFolders;
