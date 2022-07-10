class Stories {
  stories = [];

  constructor() {
    this.stories.push({
      title: "Tuto Meurtre au Manoir",
      id: 1,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [true, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 0],
        [1, 0, 3],
        [2, 0, 0],
        [3, 0, 1]
      ],
      data: [
        [
          [
            [true, ["InfoZone0", "InfoValue1"], ["Clock0", "Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso2"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, ["InfoZone1", "InfoValue2"], ["Clock3"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock2"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock3"]],
            [true, ["InfoZone1", "InfoValue1"], ["Clock0", "Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone1", "InfoValue2"], ["Perso0"]]
          ]
        ],
        [
          [
            [false, ["InfoZone2", "InfoValue1"], ["Clock2"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock1"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock3"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue3"], ["Perso3"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso1"]]
          ]
        ],
        [
          [
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone3", "InfoValue1"], ["Clock0", "Replay"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock2"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso3"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Meurtre au Manoir",
      id: 100,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [true, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 4],
        [1, 0, 3],
        [2, 0, 3],
        [3, 0, 2],
        [4, 0, 1],
        [5, 0, 2]
      ],
      data: [
        [
          [
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock2"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock1"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock3"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso4"]]
          ]
        ],
        [
          [
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock5"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone1", "InfoValue3"], ["Clock4"]],
            [false, ["InfoZone1", "InfoValue2"], ["Clock4"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue2"], ["Perso5"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso4"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue2"], ["Perso5"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso1"]]
          ]
        ],
        [
          [
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock3"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone2", "InfoValue3"], ["Clock3"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock3"]],
            [false, ["InfoZone2", "InfoValue3"], ["Clock5"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone2", "InfoValue3"], ["Perso4"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso3"]]
          ]
        ],
        [
          [
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock2"]],
            [false, ["InfoZone3", "InfoValue3"], ["Clock2"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso1"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso2"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, ["InfoZone4", "InfoValue3"], ["Clock4"]],
            [false, ["InfoZone4", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone4", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso2"]]
          ]
        ],
        [
          [
            [false, ["InfoZone5", "InfoValue3"], ["Clock3"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso0"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Meurtre au Manoir",
      id: 101,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [true, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 2],
        [1, 0, 1],
        [2, 0, 0],
        [3, 0, 3],
        [4, 0, 4],
        [5, 0, 1]
      ],
      data: [
        [
          [
            [false, ["InfoZone0", "InfoValue2"], ["Clock3"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock2"]],
            [true, ["InfoZone0", "InfoValue1"], ["Clock0", "Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, ["InfoZone1", "InfoValue2"], ["Clock4"]],
            [false, ["InfoZone1", "InfoValue2"], ["Clock3"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue2"], ["Clock2"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue2"], ["Perso5"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone1", "InfoValue2"], ["Perso2"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, ["InfoZone2", "InfoValue2"], ["Clock5"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock1"]],
            [false, ["InfoZone2", "InfoValue3"], ["Clock5"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock1"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue3"], ["Perso2"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso2"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso0"]]
          ]
        ],
        [
          [
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock5"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock2"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock4"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock4"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock4"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso2"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue3"], ["Perso5"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso1"]]
          ]
        ],
        [
          [
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock1"]],
            [false, ["InfoZone4", "InfoValue3"], ["Clock5"]],
            [false, ["InfoZone4", "InfoValue1"], ["Clock5"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone4", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso3"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Perso5"]]
          ]
        ],
        [
          [
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock5"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock3"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso4"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso3"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Meurtre au Manoir",
      id: 102,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [true, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 1],
        [1, 0, 5],
        [2, 0, 4],
        [3, 0, 1],
        [4, 0, 2],
        [5, 0, 5]
      ],
      data: [
        [
          [
            [false, ["InfoZone0", "InfoValue2"], ["Clock3"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock5"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone0", "InfoValue2"], ["Perso0"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Perso1"]]
          ]
        ],
        [
          [
            [false, ["InfoZone1", "InfoValue2"], ["Clock4"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue2"], ["Clock2"]],
            [false, ["InfoZone1", "InfoValue2"], ["Clock4"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso3"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue3"], ["Perso0"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, ["InfoZone2", "InfoValue2"], ["Clock5"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock2"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock5"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock3"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock3"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock3"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso0"]],
            [false, ["InfoZone2", "InfoValue3"], ["Perso4"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso2"]]
          ]
        ],
        [
          [
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock4"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock4"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso5"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue3"], ["Perso2"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Clock1"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone4", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso2"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue1"], ["Clock0", "Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock1"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock5"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock5"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue1"], ["Perso2"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso2"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Perso5"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Meurtre au Manoir",
      id: 103,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [true, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 5],
        [1, 0, 0],
        [2, 0, 5],
        [3, 0, 4],
        [4, 0, 2],
        [5, 0, 0]
      ],
      data: [
        [
          [
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue3"], ["Clock4"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone0", "InfoValue1"], ["Clock0", "Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso1"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue2"], ["Clock1"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue1"], ["Perso1"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso1"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock5"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue3"], ["Clock4"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock1"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso4"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso4"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso1"]]
          ]
        ],
        [
          [
            [false, ["InfoZone3", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock5"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock5"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock5"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock2"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso5"]],
            [false, ["InfoZone3", "InfoValue3"], ["Perso3"]]
          ]
        ],
        [
          [
            [false, ["InfoZone4", "InfoValue3"], ["Clock1"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone4", "InfoValue3"], ["Clock2"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Clock5"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone4", "InfoValue2"], ["Perso0"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone4", "InfoValue2"], ["Perso0"]]
          ]
        ],
        [
          [
            [false, ["InfoZone5", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock2"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock3"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone5", "InfoValue2"], ["Perso0"]],
            [false, ["InfoZone5", "InfoValue2"], ["Perso3"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Meurtre au Manoir",
      id: 104,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [true, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 1],
        [1, 0, 4],
        [2, 0, 2],
        [3, 0, 4],
        [4, 0, 3],
        [5, 0, 2]
      ],
      data: [
        [
          [
            [false, ["InfoZone0", "InfoValue2"], ["Clock5"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock1"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue3"], ["Perso2"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso2"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Perso5"]]
          ]
        ],
        [
          [
            [true, ["InfoZone1", "InfoValue1"], ["Clock0", "Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock5"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock3"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso5"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso2"]]
          ]
        ],
        [
          [
            [false, ["InfoZone2", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue3"], ["Clock4"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock5"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue3"], ["Clock4"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue3"], ["Perso5"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue3"], ["Perso0"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso3"]]
          ]
        ],
        [
          [
            [false, ["InfoZone3", "InfoValue1"], ["Clock3"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone3", "InfoValue1"], ["Clock0", "Replay"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso1"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso1"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock3"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone4", "InfoValue2"], ["Perso3"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso4"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock1"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone5", "InfoValue3"], ["Clock1"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue3"], ["Perso1"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso4"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Perso1"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Le Casse du Siècle",
      id: 200,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [true, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 2],
        [1, 0, 2],
        [2, 0, 4],
        [3, 0, 5],
        [4, 0, 0],
        [5, 0, 4]
      ],
      data: [
        [
          [
            [false, ["InfoZone0", "InfoValue2"], ["Clock2"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock2"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue1"], ["Clock0", "Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Perso1"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, ["InfoZone1", "InfoValue3"], ["Clock1"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock1"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock2"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue2"], ["Perso1"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso0"]]
          ]
        ],
        [
          [
            [true, ["InfoZone2", "InfoValue1"], ["Clock0", "Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock3"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock5"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue1"], ["Perso4"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso1"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso2"]]
          ]
        ],
        [
          [
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock4"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock4"]],
            [false, ["InfoZone3", "InfoValue3"], ["Clock3"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock4"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock1"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue2"], ["Perso3"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso5"]],
            [false, ["InfoZone3", "InfoValue3"], ["Perso4"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso3"]]
          ]
        ],
        [
          [
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue1"], ["Clock0", "Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Clock4"]],
            [false, ["InfoZone4", "InfoValue1"], ["Clock5"]],
            [false, ["InfoZone4", "InfoValue3"], ["Clock5"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso5"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone4", "InfoValue2"], ["Perso5"]]
          ]
        ],
        [
          [
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock5"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock1"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock4"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso1"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Le Casse du Siècle",
      id: 201,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [true, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 2],
        [1, 0, 2],
        [2, 0, 4],
        [3, 0, 4],
        [4, 0, 5],
        [5, 0, 5]
      ],
      data: [
        [
          [
            [false, ["InfoZone0", "InfoValue2"], ["Clock1"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock1"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock3"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue2"], ["Perso1"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, ["InfoZone1", "InfoValue1"], ["Clock3"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso4"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, ["InfoZone2", "InfoValue3"], ["Clock2"]],
            [false, ["InfoZone2", "InfoValue3"], ["Clock2"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock5"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue3"], ["Perso4"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso4"]]
          ]
        ],
        [
          [
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock5"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock2"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock2"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock1"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue2"], ["Perso4"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso3"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso2"]]
          ]
        ],
        [
          [
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock3"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock4"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone4", "InfoValue2"], ["Perso3"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso5"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock1"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock5"]],
            [true, ["InfoZone5", "InfoValue1"], ["Clock0", "Replay"]],
            [false, ["InfoZone5", "InfoValue3"], ["Clock5"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue2"], ["Perso2"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone5", "InfoValue2"], ["Perso5"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Le Casse du Siècle",
      id: 202,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [true, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 4],
        [1, 0, 5],
        [2, 0, 1],
        [3, 0, 0],
        [4, 0, 3],
        [5, 0, 5]
      ],
      data: [
        [
          [
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock5"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock5"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso1"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Perso2"]]
          ]
        ],
        [
          [
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue3"], ["Clock4"]],
            [false, ["InfoZone1", "InfoValue3"], ["Clock1"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone1", "InfoValue2"], ["Perso4"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso3"]]
          ]
        ],
        [
          [
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock4"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock3"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock4"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso2"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso3"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso4"]]
          ]
        ],
        [
          [
            [false, ["InfoZone3", "InfoValue3"], ["Clock1"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock1"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock2"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock1"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue3"], ["Perso0"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso0"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso0"]]
          ]
        ],
        [
          [
            [false, ["InfoZone4", "InfoValue3"], ["Clock4"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock2"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Perso0"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Perso5"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue1"], ["Clock0", "Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock5"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue1"], ["Perso4"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso5"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Le Casse du Siècle",
      id: 203,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [true, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 0],
        [1, 0, 4],
        [2, 0, 1],
        [3, 0, 5],
        [4, 0, 0],
        [5, 0, 5]
      ],
      data: [
        [
          [
            [true, ["InfoZone0", "InfoValue1"], ["Clock0", "Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock3"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Perso4"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, ["InfoZone1", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue3"], ["Clock5"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone1", "InfoValue2"], ["Perso2"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue2"], ["Perso2"]]
          ]
        ],
        [
          [
            [false, ["InfoZone2", "InfoValue2"], ["Clock4"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock4"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock4"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue2"], ["Perso2"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue3"], ["Perso2"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, ["InfoZone3", "InfoValue1"], ["Clock5"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock1"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock5"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue2"], ["Perso3"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso3"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso0"]]
          ]
        ],
        [
          [
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue3"], ["Clock3"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock1"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone4", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone4", "InfoValue2"], ["Perso5"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso1"]]
          ]
        ],
        [
          [
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock4"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock5"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock4"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso1"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Perso5"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso3"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Le Casse du Siècle",
      id: 204,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [true, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 5],
        [1, 0, 4],
        [2, 0, 3],
        [3, 0, 1],
        [4, 0, 1],
        [5, 0, 3]
      ],
      data: [
        [
          [
            [false, ["InfoZone0", "InfoValue1"], ["Clock3"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock3"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Perso4"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue3"], ["Perso0"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, ["InfoZone1", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock2"]],
            [true, ["InfoZone1", "InfoValue1"], ["Clock0", "Replay"]],
            [false, ["InfoZone1", "InfoValue3"], ["Clock5"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue2"], ["Perso4"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso4"]]
          ]
        ],
        [
          [
            [false, ["InfoZone2", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock4"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock5"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue2"], ["Perso2"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso4"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso0"]]
          ]
        ],
        [
          [
            [false, ["InfoZone3", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock5"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock5"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock4"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock3"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso3"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso2"]]
          ]
        ],
        [
          [
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Clock3"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock2"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone4", "InfoValue2"], ["Perso3"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso5"]]
          ]
        ],
        [
          [
            [true, ["InfoZone5", "InfoValue1"], ["Clock0", "Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock1"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock4"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue2"], ["Perso1"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Perso1"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Squid Game",
      id: 300,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [false, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 4],
        [1, 0, 1],
        [2, 0, 2],
        [3, 0, 5],
        [4, 0, 1],
        [5, 0, 3]
      ],
      data: [
        [
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Clock2"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock1"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso1"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue3"], ["Clock3"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue3"], ["Clock4"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone1", "InfoValue2"], ["Perso1"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso1"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue2"], ["Clock4"]],
            [true, ["InfoZone2", "InfoValue1"], ["Clock0", "Replay"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock5"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso0"]]
          ]
        ],
        [
          [
            [false, [], []],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone3", "InfoValue3"], ["Clock1"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue3"], ["Clock4"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue3"], ["Perso0"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso3"]]
          ]
        ],
        [
          [
            [false, [], []],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock3"]],
            [false, ["InfoZone4", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Clock3"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Perso5"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso2"]]
          ]
        ],
        [
          [
            [false, [], []],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock4"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock1"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone5", "InfoValue2"], ["Perso2"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso5"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Squid Game",
      id: 301,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [false, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 2],
        [1, 0, 1],
        [2, 0, 5],
        [3, 0, 4],
        [4, 0, 4],
        [5, 0, 0]
      ],
      data: [
        [
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Clock1"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue3"], ["Clock5"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue2"], ["Perso1"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso5"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso5"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock5"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock1"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso1"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso4"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue1"], ["Clock3"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock3"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock4"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock4"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso0"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso3"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso4"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue1"], ["Clock4"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock2"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock4"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock3"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso3"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso4"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso3"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso2"]]
          ]
        ],
        [
          [
            [false, [], []],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock1"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock5"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone4", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso4"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone4", "InfoValue2"], ["Perso3"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue1"], ["Clock5"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock3"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock1"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue2"], ["Perso3"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso1"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Squid Game",
      id: 302,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [false, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 5],
        [1, 0, 1],
        [2, 0, 0],
        [3, 0, 0],
        [4, 0, 4],
        [5, 0, 4]
      ],
      data: [
        [
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone0", "InfoValue3"], ["Clock2"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock2"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone0", "InfoValue2"], ["Perso3"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue2"], ["Perso2"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue2"], ["Clock2"]],
            [false, ["InfoZone1", "InfoValue2"], ["Clock1"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock1"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue2"], ["Perso2"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso2"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue1"], ["Clock3"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock3"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock5"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone2", "InfoValue3"], ["Perso2"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso0"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock4"]],
            [false, ["InfoZone3", "InfoValue3"], ["Clock1"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock1"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue3"], ["Perso4"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone3", "InfoValue3"], ["Perso3"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso4"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone4", "InfoValue1"], ["Clock5"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue1"], ["Clock0", "Replay"]],
            [false, ["InfoZone4", "InfoValue3"], ["Clock5"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso5"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Perso1"]]
          ]
        ],
        [
          [
            [false, [], []],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock2"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock2"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Perso4"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Squid Game",
      id: 303,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [false, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 1],
        [1, 0, 2],
        [2, 0, 5],
        [3, 0, 3],
        [4, 0, 3],
        [5, 0, 5]
      ],
      data: [
        [
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Clock2"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock4"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock5"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone0", "InfoValue2"], ["Perso4"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue2"], ["Clock1"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock5"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue2"], ["Clock2"]],
            [false, ["InfoZone1", "InfoValue1"], ["Clock3"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue1"], ["Perso1"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone1", "InfoValue2"], ["Perso1"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso2"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue2"], ["Clock4"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock3"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock4"]],
            [false, ["InfoZone2", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock2"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue2"], ["Perso4"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone2", "InfoValue3"], ["Perso5"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue1"], ["Clock5"]],
            [false, ["InfoZone3", "InfoValue1"], ["Clock2"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone3", "InfoValue1"], ["Clock0", "Replay"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock5"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue1"], ["Perso5"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso0"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso3"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone3", "InfoValue3"], ["Perso5"]]
          ]
        ],
        [
          [
            [false, [], []],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone4", "InfoValue1"], ["Clock2"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone4", "InfoValue1"], ["Perso2"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, [], []],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue1"], ["Clock0", "Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock1"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue1"], ["Clock0", "Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue1"], ["Perso3"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue1"], ["Perso0"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]]
          ]
        ]
      ]
    });
    this.stories.push({
      title: "Squid Game",
      id: 304,
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      plaquettes: [
        [false, true, true, true, true, true],
        [false, true, true, true, true, true]
      ],
      startInfos: [
        [0, 0, 2],
        [1, 0, 4],
        [2, 0, 3],
        [3, 0, 5],
        [4, 0, 4],
        [5, 0, 1]
      ],
      data: [
        [
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue1"], ["Clock4"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock4"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Clock3"]],
            [false, ["InfoZone0", "InfoValue2"], ["Clock4"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone0", "InfoValue2"], ["Perso0"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone0", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone0", "InfoValue3"], ["Perso2"]],
            [true, ["InfoZone0", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone1", "InfoValue1"], ["Clock5"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue2"], ["Clock3"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso5"]],
            [true, ["InfoZone1", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone1", "InfoValue1"], ["Perso1"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone2", "InfoValue1"], ["Clock3"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock3"]],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock2"]],
            [false, ["InfoZone2", "InfoValue2"], ["Clock2"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone2", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso4"]],
            [false, ["InfoZone2", "InfoValue3"], ["Perso1"]],
            [false, ["InfoZone2", "InfoValue1"], ["Perso4"]],
            [false, ["InfoZone2", "InfoValue2"], ["Perso2"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue1"], ["Clock2"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock2"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock1"]],
            [false, ["InfoZone3", "InfoValue2"], ["Clock1"]],
            [true, ["InfoZone3", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone3", "InfoValue2"], ["Perso3"]],
            [false, ["InfoZone3", "InfoValue2"], ["Perso2"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso3"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso0"]],
            [false, ["InfoZone3", "InfoValue1"], ["Perso4"]]
          ]
        ],
        [
          [
            [false, [], []],
            [true, ["InfoZone4", "InfoValue1"], ["Clock0", "Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue2"], ["Clock4"]],
            [true, ["InfoZone4", "InfoValue1"], ["Clock0", "Replay"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso3"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone4", "InfoValue1"], ["Perso3"]],
            [true, ["InfoZone4", "InfoValue0"], ["Replay"]]
          ]
        ],
        [
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone5", "InfoValue1"], ["Clock1"]],
            [false, ["InfoZone5", "InfoValue2"], ["Clock5"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]]
          ],
          [
            [false, [], []],
            [false, ["InfoZone5", "InfoValue2"], ["Perso2"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [true, ["InfoZone5", "InfoValue0"], ["Replay"]],
            [false, ["InfoZone5", "InfoValue2"], ["Perso3"]]
          ]
        ]
      ]
    });
  }

  getListTitleStories() {
    var titleStories = [];
    for (var s = 0; s < this.stories.length; s++) {
      var thisTitleStory = this.stories[s].title;
      var newTitle = true;
      for (var i = 0; i < titleStories.length; i++) {
        if (titleStories[i].title === thisTitleStory) {
          titleStories[i].counter++;
          newTitle = false;
        }
      }
      if (newTitle) {
        titleStories.push({ title: thisTitleStory, counter: 1 });
      }
    }
    return titleStories;
  }

  getRandomGame(title) {
    var listGames = [];
    for (var s = 0; s < this.stories.length; s++) {
      if (this.stories[s].title === title) {
        listGames.push(this.stories[s]);
      }
    }
    return listGames[Math.floor(Math.random() * listGames.length)];
  }
}

export default Stories;
