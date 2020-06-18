  /**
   * 获取fkMmt的Size
   * @param value fkMmt.description.value
   */
  function getSize(value) {
    return value.substring(
      0,
      value.indexOf(':') === -1 ? undefined : value.indexOf(':')
    );
  }

  /**
   * 获取fkMmt的Measurement
   * @param value fkMmt.description.value
   */
  function getMeasurement(value) {
    return value.substring(
      value.indexOf(':') === -1 ? value.length : value.indexOf(':') + 1
    );
  }

  const value= 'sdf';
  console.log(getSize(value))

  console.log(getMeasurement(value))