export default function formatNumber(number: number) {
  if (number < 1000000) {
    return Math.round(number).toLocaleString();
  } else if (number < 1000000000) {
    return `${(number / 1000000).toFixed(3)} million`;
  } else if (number < 1000000000000) {
    return `${(number / 1000000000).toFixed(3)} billion`;
  }
}
