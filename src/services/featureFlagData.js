const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccourdian: true,
  showTreeView: true,
};

function featureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some Error Occured");
  });
}

export default featureFlagDataServiceCall;
