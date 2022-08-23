const fs = require('fs');
const glob = require('glob');
const {basename, resolve} = require('path');

var argv = require('minimist')(process.argv.slice(2));

const SIZE = 25;
const START = '<svg';
const WIDTH_SEARCH = 'width="';
const HEIGHT_SEARCH = 'height="';
const COLOR_SEARCH = /(fill|stroke)=["'](.*?)["']/g;

const project = argv._[0];
const dir = argv.dir ?? 'assets/icons';
const types = argv.types ?? 'icons.d.ts';
const replaceColors = (argv['replace-colors'] ?? 'true') !== 'false';

const projectDir = resolve(`${process.cwd()}/projects/${project}/src`);
const iconsDir = resolve(`${projectDir}/${dir}`);
const iconsFile = resolve(`${iconsDir}/icons.svg`);
const typesFile = resolve(`${projectDir}/${types}`);

processIcons();

function processIcons() {

  glob(`${iconsDir}/*.svg`, {}, (err, files) => {
    const icons = [];
    fs.writeFileSync(resolve(iconsFile), `<svg width="1em" height="1em" viewBox="0 0 ${SIZE} ${SIZE}" fill="none" xmlns="http://www.w3.org/2000/svg">`);
    files.forEach(file => {
      const filename = basename(file);
      if (filename === 'icons.svg') return;
      const src = String(fs.readFileSync(file));
      const name = filename.replace('.svg', '');
      const wrapped = wrapIcon(src, name);
      const minified = wrapped.replace(/\s+/g, ' ');

      icons.push(name);
      fs.appendFileSync(iconsFile, minified);
    });
    fs.appendFileSync(iconsFile, '</svg>');

    const types = icons.length ? icons.map(name => `  | '${name}'`).join('\r\n') : 'string';
    fs.writeFileSync(typesFile, `export type Icon =\r\n${types};\r\n`);
  });
}

function wrapIcon(source, name) {
  let src = source.substring(source.indexOf(START));
  if (replaceColors) {
    src = source.replace(/(fill|stroke)=["'](.*?)(!?)["']/g, (substring, type, color, exclamation) => `${type}="${color === 'none' ? 'none' : exclamation ? color : 'currentColor'}"`);;
  }

  const attributes = src.substring(0, src.indexOf('>'));

  if (
    !attributes ||
    !attributes.includes(WIDTH_SEARCH) ||
    !attributes.includes(HEIGHT_SEARCH)
  ) {
    return src.replace(START, `<svg id="${name}"`);
  }

  const indexOfWidth = attributes.indexOf(WIDTH_SEARCH);
  const indexOfHeight = attributes.indexOf(HEIGHT_SEARCH);
  const widthOffset = indexOfWidth + WIDTH_SEARCH.length;
  const heightOffset = indexOfHeight + HEIGHT_SEARCH.length;
  const widthString = attributes.substring(
    widthOffset,
    attributes.indexOf('"', widthOffset),
  );
  const heightString = attributes.substring(
    heightOffset,
    attributes.indexOf('"', heightOffset),
  );

  let width = parseInt(widthString, 10);
  let height = parseInt(heightString, 10);

  const size = Math.max(width, height);
  const center = size / 2;

  return `<svg id="${name}" overflow="visible" viewBox="0 0 ${size} ${size}">${src.replace(START, `<svg x="${center - width / 2}" y="${center - height / 2}"`)}</svg>`;
}
