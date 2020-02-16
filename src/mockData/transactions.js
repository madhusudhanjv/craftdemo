export const SAMPLE_TRASACTIONS = [];

export function getSampleTransactions() {
  const sampleTransactions = [];
  const currentDate = new Date();
  for (let i = 1; i <= 100; i++) {
    sampleTransactions.push({
      id: i,
      userId: 1,
      amount: Math.floor(getRandomArbitrary(-100, 100)),
      description: `Trasaction ${i}`,
      date: currentDate.setDate(currentDate.getDate()-(100 + i)),
    })
  }
  return sampleTransactions;
}


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}