import { checkUnknown } from 'type-plus'
class ErrorA extends Error { }
class ErrorB extends Error { }

try { throw new ErrorA() }
catch (e: unknown) {
  if (checkUnknown(e, ErrorA)) {
    // handle ErrorA
  } else if (checkUnknown(e, ErrorB)) {
    // handle ErrorB
  } else {
    // handle generic Error
  }
}
