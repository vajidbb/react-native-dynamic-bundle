module.exports = {
  dependency: {
    platforms: {
      android: {
        sourceDir: './android',
        packageImportPath: 'import com.reactnative.dynamicbundle.RNDynamicBundlePackage;',
        packageInstance: 'new RNDynamicBundlePackage()',
      },
    },
  },
};
