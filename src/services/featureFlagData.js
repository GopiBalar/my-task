// const dummyApiResponse = {
//   showLightAndDarkMode: true,
//   showTicTacToeBoard: false,
//   showRandomColorGenerator: true,
//   showAccourdian: true,
//   showTreeView: true,
// };

// function featureFlagDataServiceCall() {
//   return new Promise((resolve, reject) => {
//     if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
//     else reject("Some Error Occured");
//   });
// }

// export default featureFlagDataServiceCall;

const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: false,
  showAccourdian: true,
  showRandomColors: false,
  showTreeView: true,
};

function featureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some Error Occured");
  });
}

export default featureFlagDataServiceCall;
