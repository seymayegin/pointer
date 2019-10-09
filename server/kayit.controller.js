const express = require('express');
const router = express.Router();

const dbUtils = require('db-utils.js');


router.get('/duyuru-liste', getDuyurular);
router.get('/not-liste', getNotlar);

router.get('/kullanici', getKullanicilar);
router.post('/kullanici', kullaniciEkle);
router.put('/kullanici', kullaniciGuncelle);
router.delete('/kullanici', kullaniciSil);

module.exports = router;

function getDuyurular(req, res, next) {
	const duyurular = [{baslik:'Duyuru 01', aciklama: 'Duyuru İçerik 01'}, {baslik:'Duyuru 02', aciklama: 'Duyuru İçerik 02'}];
	res.status(200).json({ data: duyurular});
}

function getNotlar(req, res, next) {
	let notlar = [];
	if(req.user.sub === 1){
		notlar = [{kodu:'MAT101', notlar: [50,60,55,20]}, {kodu:'TUR101', notlar: [50,60,55,20]}];
	}
	
	res.status(200).json({ data: notlar});
}

async function kullaniciEkle(req, res, next) {
	const sonuc = await dbUtils.query(`insert into kullanici values(nextval('seq_kullanici'),$1,$2,$3,$4,$5)`
	 ,[req.body.kullaniciAdi,req.body.sifre,req.body.adi,req.body.soyadi,req.body.admin]);
	res.status(200).json({ data: sonuc});
}

async function kullaniciGuncelle(req, res, next) {
	const sonuc = await dbUtils.query(`update kullanici set kullanici_adi =$1,sifre=$2,adi=$3,soyadi=$4,admin=$5 where id=$6`
	 ,[req.body.kullaniciAdi,req.body.sifre,req.body.adi,req.body.soyadi,req.body.admin,req.body.id]);
	res.status(200).json({ data: sonuc});
}

async function kullaniciSil(req, res, next) {
	const sonuc = await dbUtils.query(`delete from kullanici where id=$1`
	 ,[req.body.id]);
	res.status(200).json({ data: sonuc});
}

async function getKullanicilar(req, res, next) {
	const sonuc = await dbUtils.query(`select * from kullanici order by id desc`,[]);
	res.status(200).json({ data: sonuc.rows});
}






