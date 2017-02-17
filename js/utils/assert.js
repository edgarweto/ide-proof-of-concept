
/**
 * @summary asserts that the function does not throw an exception and returns true.
 *  This is done that way in order to be able to assert expressions that could throw exceptions.
 */
export default function assert(fn, msg) {
  try {
    if (!fn()) {
      console.error("assert failed" + (msg ? ': ' + msg : ''));
      debugger;
    }
  } catch (e) {
    console.error("assert failed", e);
    debugger;
  }
}