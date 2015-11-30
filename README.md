# diver

## Install
```
npm install diver
```

## API

### get
``diver.get(object, keys, [defaultValue])``

### set
``diver.set(object, keys, value)``

## Example

```
var swamp = {
  'a': {
    'b': 123,
    't': {
      'c': 89,
      'v': {
        'x': 'Test'
      }
    }
  }
};

diver.get(swamp, ['a', 't', 'v', 'x'], 'Default value');

diver.set(swamp, ['z', 't', 'v', 'x'], 'test');

```
