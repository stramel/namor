import test from 'ava'
import namor from '../src/index'

// -----------------------------------------------------------------------------
// exports
// -----------------------------------------------------------------------------

test('exports', (t) => {
  t.is(typeof namor.generate, 'function')
})
