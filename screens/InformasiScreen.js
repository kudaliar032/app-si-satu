import React, {Component} from 'react';
import {View, WebView} from 'react-native';
import {Toolbar} from 'react-native-material-ui';

const data = [
    {
        pengertian: `<p align="justify" style="font-size: 14pt">
Sila pertama berbunyi Ketuhanan Yang Maha Esa yang disimbolkan dengan bintang emas. Maksud dari sila pertama yang berbunyi Ketuhanan Yang Maha Esa adalah kita sebagai Masyarakat Indonesia memahami dan meyakini jika tuhan itu ada dan Negara Indonesia telah menjamin jika setiap orang berhak untuk memeluk agama sesuai dengan keyakinan masing-masing. Dari situlah bisa ditegaskan jika Indonesia tidak memperkenankan jika warganya tidak memiliki agama karena Pancasila sendiri bersifat memaksa dalam pelaksanaannya sehingga mengharuskan seseorang memilih salah satu dari keenam agama tersebut.
</p>`,

        arti: `<p align="justify" style="font-size: 14pt">
Sila pertama dari Pancasila Dasar Negara NKRI adalah Ketahuan Yang Maha Esa. Kalimat pada sila pertama ini tidak lain menggunakan istilah dalam bahasa Sansekerta ataupun bahasa Pali. Ketuhanan Yang Maha Esa adalah Tuhan Yang satu, atau Tuhan yang jumlahnya satu. Jika kita membahasnya dalam bahasa Sansekerta ataupun Pali, ketuhanan yang Maha Esa bukanlah Tuhan yang bermakna satu.</br><br/>
Ketuhanan berasal dari kata tuhan yang diberi imbuhan berupa awalan ke- dan akhiran –an.  Penambahan awalan ke- dan akhiran –an dapat memberi makna perubahan menjadi antara lain: mengalami hal "sifat-sifat". Kata ketuhanan yang beasal dari kata tuhan yang diberi imbuhan ke- dan –an bermakna sifat-sifat tuhan. Dengan kata lain ketuhanan berarti sifat-sifat tuhan atau sifat-sifat yang berhubungan dengan tuhan. Kata Maha berasal dari bahasa Sansekerta atau Pali yang bisa berarti mulia atau besar (Bukan dalam pengertian bentuk). Kata Maha bukan berarti sangat. Kata "Esa" juga berasal dari bahasa Sansekerta atau Pali. Kata "Esa" bukan berarti satu atau tunggal dalam jumlah. Kata "Esa" berasal dari kata “etad” yang lebih mengacu pada pengertian keberadaan yang mutlak atau mengacu pada kata "ini" (this - Inggris), dengan kata lain Ketuhanan berarti Tuhan adalah pencipta seluruh alam semesta. Tuhan tidak diciptakan oleh makhluk lain melainkan Tuhan yang menciptakan segalanya. Sedangkan arti Yang Maha Esa adalah Tuhan itu Tunggal, Maha Agung, tiada sekutu bagi-Nya, tidak ada yang bisa menandingi keagungan-Nya. Dari situlah dapat dilihat jika arti dari Sila Pertama adalah Tuhan hanya ada satu tetapi bukan berarti mengacu pada suatu individual yang kita sebut Tuhan Yang jumlahnya satu.<br/><br/>
Makna dari Sila Pertama adalah:<br/>
</p>

<ol style="font-size: 14pt">
<li>Percaya dan taqwa kepada Tuhan Yang Maha Esa sesuai dengan agama dan kepercayaannya masing-masing.</li>
<li>Saling menghormati serta bekerjasama antara pemeluk agama dan penganut-penganut kepercayaan yang berbeda-beda sehingga terbina kerukunan.</li>
<li>Saling menghormati kebebasan menjalankan ibadah sesuai dengan agama dan kepercayaan masing-masing.</li>
<li>Tidak memaksakan suatu agama atau kepercayaannya kepada orang lain.</li>
<li>Menjamin penduduk untuk memeluk agama masing-masing dan beribadah menurut agamanya.</li>
<li>Negara memberi fasilitas bagi tumbuh kembangnya agama dan dan iman warga negara dan mediator ketika terjadi konflik agama.</li>
<li>Bertoleransi dalam beragama, dalam hal ini toleransi ditekankan dalam beribadah menurut agama masing-masing.</li>
</ol>`,

        penerapan: `<ol style="font-size: 14pt">
<li>Percaya dan yakin jika Tuhan itu ada sesuai dengan agama dan keyakinan masing-masing.</li>
<li>Saling menghormati dan bekerjasama antara pemeluk agama dan penganut-penganut kepercayaan yang berbeda-beda, sehingga terbina kerukunan hidup.</li>
<li>Saling menghormati dan menghargai kebebasan menjalankan menjalankan ibadah sesuai dengan agama dan kepercayaanya.</li>
<li>Tidak memaksakan suatu agama dan kepercayaan kepada orang lain.</li>
<li>Menjalankan perintah Tuhan seusai dengan keyakinan agama masing-masing.</li>
<li>Senantiasa menjaga persatuan dan kesatuan antar umat beragama.</li>
<li>Tidak menjadikan perbedaan agama sebagai alasan untuk saling bermusuhan.</li>
<li>Tidak melakukan perbuatan yang merusak suasana kerukunan antar pemeluk agama di masyarakat.</li>
<li>Tidak melakukan perbuatan yang dilarang agama.</li>
</ol>`
    }
];


class InformasiScreen extends Component {
    getTitle(menu) {
        switch (menu) {
            case "pengertian":
                return "Pengertian Sila".toUpperCase();
            case "arti":
                return "Arti dan Makna Sila".toUpperCase();
            case "penerapan":
                return "Penerapan Dalam Kehidupan Sehari-hari".toUpperCase();

        }
    }

    render() {
        const {sila, menu} = this.props.navigation.state.params;
        return (
            <View style={{
                flex: 1
            }}>
                <Toolbar
                    centerElement={this.getTitle(menu)}
                    leftElement="arrow-back"
                    onLeftElementPress={() => {
                        this.props.navigation.goBack();
                    }}
                />
                <View style={{
                    flex: 1,
                    backgroundColor: 'white'
                }}>
                    <View style={{
                        margin: 20,
                        flex: 1
                    }}>
                        <WebView
                            source={{ html: data[sila-1][menu] }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default InformasiScreen;
