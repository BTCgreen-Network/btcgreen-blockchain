import PlotterName from './PlotterName';
import optionsForPlotter from '../utils/optionsForPlotter';
import defaultsForPlotter from '../utils/defaultsForPlotter';

export default {
  displayName: 'BTCgreen Proof of Space',
  options: optionsForPlotter(PlotterName.BTCGREENPOS),
  defaults: defaultsForPlotter(PlotterName.BTCGREENPOS),
  installInfo: { installed: true },
};
