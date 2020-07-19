const { dialog } = require('electron')

const getExtensionsCtrl = async function () {
  try {
    const extensions = await dialog.showOpenDialog({
      title: 'Select Library Folders',
      properties: ['openDirectory', 'multiSelections'],
    })

    return extensions
    // addLibraries(newLibraries)
  } catch (error) {
    if (error) throw error
  }
}

module.exports = {
  getExtensionsCtrl,
}
