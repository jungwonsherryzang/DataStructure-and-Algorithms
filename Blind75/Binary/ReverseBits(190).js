//Reverse bits (190)
//reverse bits of given 32 bits unsigned integer

//Approach:
//using bitmaniputation - left shift and right shift 
//and bit operator - AND and OR
var reverseBits = (n) => {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    //1. need to set the least significant bit
    //using AND operator(&)
    let lastBit = n & 1;

    //2. to reverse bit
    //using LEFT SHIFT(<<)
    let revBit = lastBit << (31 - i); //to make sure that we reverse in the correct order

    //3. update the result
    //using OR operator(|)
    result = result | revBit;

    //4. need to remove the least significant bit
    //using RIGHT SHIFT(>>)
    n = n >>> 1;
  }
  //need to convert the result to an unsigned 32-bit integer
  //using RIGHT SHIFT;
  return result >>> 0; 
}
reverseBits(00000010100101000001111010011100); //964176192 (00111001011110000010100101000000)

reverseBits(11111111111111111111111111111101); //3221225471 (10111111111111111111111111111111)
