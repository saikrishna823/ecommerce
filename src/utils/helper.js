export function calculateTotalPrice(quantity,price){
    return  quantity*price;
}
export function splitParagraphIntoSentences(paragraph) {
    return paragraph.match(/[^.!?]+[.!?]+/g)
      .map((sentence) =>sentence.trim()
      );
  }