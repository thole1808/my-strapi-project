// config/plugins.js
export default ({ env }) => ({
    upload: {
        provider: 'local',
        providerOptions: {
            // Mengatur folder tujuan upload file
            directory: env('UPLOADS_DIRECTORY', './public/uploads'),
            // Mengatur ukuran maksimum file yang bisa diupload (dalam byte)
            maxFileSize: 1000000, // Contoh: 1 MB
        },
    },
});
