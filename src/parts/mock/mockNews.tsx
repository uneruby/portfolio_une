export const makeDummyNews = (title:string) => {
    const text:string = title+"のニュース"
    myNews.push({
        title: title,
        text: text.repeat(Math.random()*10),
        imageUrl: "https://storage.googleapis.com/studio-cms-assets/projects/7kadlQE8a3/s-1920x1080_v-frms_webp_50d50d0d-0c60-4b00-9e42-68c70d3eabb8_middle.webp",
    })
}

export const myNews = [{
    title: "Link-Uインターンシップに参加",
    text: "たのしいいいいいいいいいいいいいいいあああああああああああああああああああうわああああああああああああああ",
    imageUrl: "https://storage.googleapis.com/studio-cms-assets/projects/7kadlQE8a3/s-1920x1080_v-frms_webp_50d50d0d-0c60-4b00-9e42-68c70d3eabb8_middle.webp",
},
{
    title: "和歌山高専から謎の4万円、振り込まれる",
    text: "絶対に返さない",
    imageUrl: "https://www.pref.wakayama.lg.jp/prefg/040200/wakayama-nct_d/img/001.jpg",
}]