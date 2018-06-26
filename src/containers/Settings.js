import { connect } from 'react-redux';

import Settings from '~/components/Settings';

const mapStateToProps = (state, ownProps) => ({
  active: state.settings.active,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggle: () => {
    dispatch({
      type: 'TOGGLE_SETTINGS',
    });
  },
});

const SettingsContainer = connect(
  mapStateToProps, // lecture depuis le state
  mapDispatchToProps, // écriture dans le state (rien à faire dans ce cas)
)(Settings);

export default SettingsContainer;
