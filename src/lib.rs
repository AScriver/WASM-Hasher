extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
use sha1::Sha1;
use sha2::{Sha256, Sha512, Digest};
use sha3::Sha3_512;
use md5::Md5;

fn compute_hash<D: Digest + Default>(data: &[u8]) -> String {
  let mut hasher = D::default();
  hasher.update(data);
  hasher.finalize().iter().map(|byte| format!("{:02x}", byte)).collect()
}

#[wasm_bindgen]
pub fn generate_hash(data: &[u8], algorithm: &str) -> String {
  match algorithm {
      "sha1" => compute_hash::<Sha1>(data),
      "sha256" => compute_hash::<Sha256>(data),
      "sha512" => compute_hash::<Sha512>(data),
      "sha3-512" => compute_hash::<Sha3_512>(data),
      "md5" => compute_hash::<Md5>(data),
      _ => "Unsupported algorithm".to_string()
  }
}
