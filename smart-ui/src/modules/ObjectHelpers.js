export function setPropertyAttribute(obj, propertyName, attributeName, attributeValue) {
    var descriptor = getCustomPropertyDescriptor(obj, propertyName);
  
    descriptor.get.$custom[attributeName] = attributeValue;
  }
  
  export function getPropertyAttributes(obj, propertyName) {
    var descriptor = getCustomPropertyDescriptor(obj, propertyName);
  
    return descriptor.get.$custom;
  }
  
  export function getPropertyAttribute(obj, propertyName, attributeName) {
    return getPropertyAttributes(obj, propertyName)[attributeName];
  }
  
  export function getCustomPropertyDescriptor(obj, prop) {
    var actualDescriptor = Object.getOwnPropertyDescriptor(obj, prop);
    if (actualDescriptor && actualDescriptor.get && actualDescriptor.get.$custom) {
      return actualDescriptor;
    }
  
    var value = obj[prop];
    var descriptor = {
      get: function() {
        return value;
      },
      set: function(newValue) {
        value = newValue;
      }
    }
    descriptor.get.$custom = {};
  
    Object.defineProperty(obj, prop, descriptor);
    return Object.getOwnPropertyDescriptor(obj, prop);
  }