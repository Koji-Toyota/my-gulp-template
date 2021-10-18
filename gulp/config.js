const SRC_DIR = 'src';
const DEST_DIR = 'public';

module.exports = {
  srcDir: SRC_DIR,
  destDir: DEST_DIR,
  style: {
    main: {
      src:  SRC_DIR + '/_assets/scss/[^_]*.scss',
      dest: DEST_DIR + '/_assets/css',
    },
  },
  script: {
    global: {
      src:  SRC_DIR + '/_assets/js/global.js',
      dest: DEST_DIR + '/_assets/js',
      name: 'bundle-Global.js'
    },
  },
  copy: {
    main: {
      src: SRC_DIR + '/_assets/img/**/*.*',
      dest: DEST_DIR + '/_assets/img',
    },
    lib: {
      src: SRC_DIR + '/_assets/js/lib/*.*',
      dest: DEST_DIR + '/_assets/js/lib',
    },
  }
};
