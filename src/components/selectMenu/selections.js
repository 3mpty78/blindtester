module.exports = {
  data: {
    name: "selections",
  },
  async execute(interaction) {
    await interaction.reply({
      content: `You selected: ${interaction.values[0]}`,
    });
  },
};
