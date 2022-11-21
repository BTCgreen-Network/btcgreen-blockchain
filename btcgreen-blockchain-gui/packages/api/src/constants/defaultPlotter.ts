import defaultsForPlotter from '../utils/defaultsForPlotter';
import optionsForPlotter from '../utils/optionsForPlotter';
import PlotterName from './PlotterName';

export default {
  displayName: 'BTCgreen Proof of Space',
  options: optionsForPlotter(PlotterName.BTCGREENPOS),
  defaults: defaultsForPlotter(PlotterName.BTCGREENPOS),
  installInfo: { installed: true },
};
