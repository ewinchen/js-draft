const a = [
  'GEKN_1AP5', 'GEKN_1WP1', 'GEKN_2AP1', 'GEKN_2AP2', 'GEKN_2AP3', 'GEKN_2AP4', 'GEKN_2AP5', 'GEKN_4AP1', 'GEKN_4AP2', 'GEKN_G01', 'GEKN_P03_4032', 'GEKN_P04_4041', 'GEKN_P04_4042', 'GEKN_P04_4043', 'GEKN_P04_4046', 'GEKN_P04_4047', 'GEKN_P09_4091', 'GEKN_P09_4092', 'GEKN_P14_4142', 'GEKN_P15_3AP3', 'GEKN_P15_4156', 'GEK_18DP_l', 'GEK_18DP_r1', 'GEK_18DP_r2', 'GEK_19DP', 'GEK_1DP1', 'GEK_1DP2', 'GEK_20DP_l', 'GEK_20DP_r', 'GEK_26DP', 'GEK_27DP', 'GEK_28DP1', 'GEK_28DP3', 'GEK_28DP4', 'GEK_29DP', 'GEK_40DP_l', 'GEK_40DP_r1', 'GEK_40DP_r2', 'GEK_40DP_r3', 'GEK_41DP', 'GEK_42DP2', 'GEK_4DP', 'GEK_50DP', 'GEK_51DP', 'GEK_52DP', 'GEK_53DP', 'GEK_58DP', 'GEK_59DP', 'GEK_5DP_l', 'GEK_5DP_r', 'GEK_60DP_L', 'GEK_61DP', 'GEK_62DP', 'GEK_6DP_r1'
]

const b = [
  'GEK_18DP_l',
  'GEK_18DP_r1',
  'GEK_18DP_r2',
  'GEK_19DP',
  'GEK_1DP1',
  'GEK_1DP2',
  'GEK_20DP_l',
  'GEK_20DP_r',
  'GEK_26DP',
  'GEK_27DP',
  'GEK_28DP1',
  'GEK_28DP3',
  'GEK_28DP4',
  'GEK_40DP_l',
  'GEK_40DP_r1',
  'GEK_40DP_r2',
  'GEK_40DP_r3',
  'GEK_41DP',
  'GEK_42DP2',
  'GEK_4DP',
  'GEK_50DP',
  'GEK_51DP',
  'GEK_52DP',
  'GEK_53DP',
  'GEK_58DP',
  'GEK_59DP',
  'GEK_5DP_l',
  'GEK_5DP_r',
  'GEK_60DP_L',
  'GEK_61DP',
  'GEK_62DP',
  'GEK_6DP_r1',
  'GEKN_1AP5',
  'GEKN_1WP1',
  'GEKN_2AP1',
  'GEKN_2AP2',
  'GEKN_2AP3',
  'GEKN_2AP4',
  'GEKN_2AP5',
  'GEKN_4AP1',
  'GEKN_4AP2',
  'GEKN_G01',
  'GEKN_P03_4032',
  'GEKN_P04_4041',
  'GEKN_P04_4042',
  'GEKN_P04_4043',
  'GEKN_P04_4046',
  'GEKN_P04_4047',
  'GEKN_P09_4091',
  'GEKN_P09_4092',
  'GEKN_P14_4142',
  'GEKN_P15_3AP3',
  'GEKN_P15_4156'
]

a.forEach(ia => {
  if (b.indexOf(ia) === -1) {
    console.log(ia);
  }
})