const levels = [
    {
        id: 1,
        title: "Base64 Password",
        hint: "The password is encoded using Base64.",

        files: {
            "notes.txt": `
Employee Password Notes

The password is Base64 encoded.
      `,

            "secret.txt": `
YWRtaW4xMjM=
      `,
        },

        password: "admin123",
    },

    {
        id: 2,
        title: "Caesar Cipher",
        hint: "Try shifting each letter backward by 3.",

        files: {
            "hint.txt": `
The password is shifted by 3.
      `,

            "encrypted.txt": `
khoor
      `,
        },

        password: "hello",
    },
];

export default levels;