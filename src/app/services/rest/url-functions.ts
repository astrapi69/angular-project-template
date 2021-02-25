export function newUrl(url: string, params?: Map<string, string | number | boolean>): string {
  if (typeof params === 'undefined') {
    return url;
  } else {
    params.forEach((value: string | number | boolean, param: string) => {
      const regExp = RegExp('({' + param + '})');
      url = url.replace(regExp, value.toString());
    });
    return url;
  }
}
