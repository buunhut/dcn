import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProducts: [
    {
      productId: 1,
      caterogy: "cloud-platform",
      productName:
        "SWITCH POE QUẢN LÝ WEB THÔNG MINH 24 CỔNG 10/100/1000MBPS + 2 CỔNG SFP GIGABIT DCN ES430-26P-POE",
      price: 9058000,
      img: "es430_24_poe.jpeg",
      detail:
        "Switch PoE quản lý web thông minh 24 cổng 10/100/1000Mbps + 2 cổng SFP Gigabit DCN ES430-26P-POE. Switch dòng ES430 serie được trang bị công nghệ bảo vệ môi trường xanh tiên tiến và cung cấp các giải pháp Gigabit hiệu suất cao, dễ quản lý, chi phí thấp cho người dùng SMB vừa và nhỏ. Loạt sản phẩm này hỗ trợ quản lý đám mây thông minh ImCloud.",
      tinhNang:
        "Tiết kiệm năng lượng xanh, bảo vệ môi trường và độ ồn thấp Các switch dòng ES430 tuân thủ các tiêu chuẩn IEEE 802.3az (Ethernet hiệu quả năng lượng), giảm đáng kể mức tiêu thụ điện năng và đạt được mức bảo tồn năng lượng xanh Xem xét đầy đủ các yêu cầu về độ ồn thấp của môi trường người sử dụng, một số mẫu ES430 có thiết kế không quạt để giảm ô nhiễm tiếng ồn. Sao lưu dự phòng, ổn định, độ tin cậy Hai cổng uplink Gigabit cho phép gộp cổng (link aggregation) tăng tốc độ và độ tin cậy Cung cấp PoE+, cung cấp năng lượng thông minh Mô hình PoE hỗ trợ nguồn PoE nâng cao (PoE+), cung cấp công suất đầu ra tối đa 30W mỗi cổng và có thể cấp nguồn cho các thiết bị tiêu thụ như AP WiFi, điện thoại video IP, camera... Hỗ trợ PoE nhanh, thiết bị có thể cung cấp nguồn cho đầu nhận 10s sau khi khởi động Hỗ trợ chức năng PoE thường trực, khi switch khởi động lại, thiết bị được cấp nguồn sẽ không bị tắt.",
      congMang:
        "16 cổng 10/100/1000Mbps tự thích ứng (Auto MDI/MDIX) 2 cổng SFP Gigabit",
      khaNangChuyenMach: "36Gbps",
      tocDoChuyenTiepGoi: "26.784Mpps",
      tinhNangVLan: ["Hỗ trợ port-based VLAN", "Hỗ trợ IEEE 802.3q VLAN"],
      dhcp: "Hỗ trợ IPv4/IPv6 DHCP client",
      quanLyCong: [
        "Hỗ trợ cấu hình web cho trạng thái cổng",
        "Hỗ trợ cấu hình web cho chức năng PoE",
      ],
      anToan: [
        "Hỗ trợ giới hạn tốc độ cổng",
        "Hỗ trợ DHCP Snooping",
        "Hỗ trợ ngăn chặn broadcast storm",
      ],
      tinhNangPoe: [
        "Hỗ trợ xem công suất PoE thời gian thực",
        "Hỗ trợ xem công suất PoE còn lại",
      ],
      quanLyVaVanHanh: [
        "Hỗ trợ quản lý bằng ImCloud",
        "Hỗ trợ Telnet",
        "Hỗ trợ cấu hình Web",
      ],
      tietKiemNangLuong: [
        "Hỗ trợ 802.3az Ethernet năng lượng hiệu quả",
        "Làm mát bằng quạt",
      ],
      kichThuoc: "330 x 220 x 44 mm",
      moiTruongSuDung: [
        "Nhiệt độ hoạt động: 0℃～55℃",
        "Nhiệt độ bảo quản: -40℃～70℃",
        "Độ ẩm hoạt động: độ ẩm tương đối 10%～90% (không ngưng tụ)",
      ],
      nguonVao: "AC 100-240VAC, 50/60Hz",
      congSuatTieuThu: [
        "Khi không cấp nguồn PoE: <9W",
        "Khi cấp nguồn PoE ra: ≤250W",
      ],
    },
    {
      productId: 2,
      caterogy: "cloud-platform",
      productName:
        "SWITCH POE QUẢN LÝ WEB THÔNG MINH 16 CỔNG 10/100/1000MBPS + 2 CỔNG SFP GIGABIT DCN ES430-18P-POE",
      price: 7436000,
      img: "es430_16_poe.jpeg",
      detail:
        "Switch PoE quản lý web thông minh 16 cổng 10/100/1000Mbps + 2 cổng SFP Gigabit DCN ES430-26P-POE. Switch dòng ES430 serie được trang bị công nghệ bảo vệ môi trường xanh tiên tiến và cung cấp các giải pháp Gigabit hiệu suất cao, dễ quản lý, chi phí thấp cho người dùng SMB vừa và nhỏ. Loạt sản phẩm này hỗ trợ quản lý đám mây thông minh ImCloud.",
      tinhNang:
        "Tiết kiệm năng lượng xanh, bảo vệ môi trường và độ ồn thấp Các switch dòng ES430 tuân thủ các tiêu chuẩn IEEE 802.3az (Ethernet hiệu quả năng lượng), giảm đáng kể mức tiêu thụ điện năng và đạt được mức bảo tồn năng lượng xanh Xem xét đầy đủ các yêu cầu về độ ồn thấp của môi trường người sử dụng, một số mẫu ES430 có thiết kế không quạt để giảm ô nhiễm tiếng ồn. Sao lưu dự phòng, ổn định, độ tin cậy Hai cổng uplink Gigabit cho phép gộp cổng (link aggregation) tăng tốc độ và độ tin cậy Cung cấp PoE+, cung cấp năng lượng thông minh Mô hình PoE hỗ trợ nguồn PoE nâng cao (PoE+), cung cấp công suất đầu ra tối đa 30W mỗi cổng và có thể cấp nguồn cho các thiết bị tiêu thụ như AP WiFi, điện thoại video IP, camera... Hỗ trợ PoE nhanh, thiết bị có thể cung cấp nguồn cho đầu nhận 10s sau khi khởi động Hỗ trợ chức năng PoE thường trực, khi switch khởi động lại, thiết bị được cấp nguồn sẽ không bị tắt.",
      congMang:
        "16 cổng 10/100/1000Mbps tự thích ứng (Auto MDI/MDIX) 2 cổng SFP Gigabit",
      khaNangChuyenMach: "36Gbps",
      tocDoChuyenTiepGoi: "26.784Mpps",
      tinhNangVLan: ["Hỗ trợ port-based VLAN", "Hỗ trợ IEEE 802.3q VLAN"],
      dhcp: "Hỗ trợ IPv4/IPv6 DHCP client",
      quanLyCong: [
        "Hỗ trợ cấu hình web cho trạng thái cổng",
        "Hỗ trợ cấu hình web cho chức năng PoE",
      ],
      anToan: [
        "Hỗ trợ giới hạn tốc độ cổng",
        "Hỗ trợ DHCP Snooping",
        "Hỗ trợ ngăn chặn broadcast storm",
      ],
      tinhNangPoe: [
        "Hỗ trợ xem công suất PoE thời gian thực",
        "Hỗ trợ xem công suất PoE còn lại",
      ],
      quanLyVaVanHanh: [
        "Hỗ trợ quản lý bằng ImCloud",
        "Hỗ trợ Telnet",
        "Hỗ trợ cấu hình Web",
      ],
      tietKiemNangLuong: [
        "Hỗ trợ 802.3az Ethernet năng lượng hiệu quả",
        "Làm mát bằng quạt",
      ],
      kichThuoc: "330 x 220 x 44 mm",
      moiTruongSuDung: [
        "Nhiệt độ hoạt động: 0℃～55℃",
        "Nhiệt độ bảo quản: -40℃～70℃",
        "Độ ẩm hoạt động: độ ẩm tương đối 10%～90% (không ngưng tụ)",
      ],
      nguonVao: "AC 100-240VAC, 50/60Hz",
      congSuatTieuThu: [
        "Khi không cấp nguồn PoE: <9W",
        "Khi cấp nguồn PoE ra: ≤250W",
      ],
    },
    {
      productId: 3,
      caterogy: "cloud-platform",
      productName:
        "SWITCH POE QUẢN LÝ WEB THÔNG MINH 8 CỔNG 10/100/1000MBPS + 2 CỔNG SFP GIGABIT DCN ES430-18P-POE",
      price: 3110000,
      img: "es430_8_poe.jpeg",
      detail:
        "Switch PoE quản lý web thông minh 16 cổng 10/100/1000Mbps + 2 cổng SFP Gigabit DCN ES430-26P-POE. Switch dòng ES430 serie được trang bị công nghệ bảo vệ môi trường xanh tiên tiến và cung cấp các giải pháp Gigabit hiệu suất cao, dễ quản lý, chi phí thấp cho người dùng SMB vừa và nhỏ. Loạt sản phẩm này hỗ trợ quản lý đám mây thông minh ImCloud.",
      tinhNang:
        "Tiết kiệm năng lượng xanh, bảo vệ môi trường và độ ồn thấp Các switch dòng ES430 tuân thủ các tiêu chuẩn IEEE 802.3az (Ethernet hiệu quả năng lượng), giảm đáng kể mức tiêu thụ điện năng và đạt được mức bảo tồn năng lượng xanh Xem xét đầy đủ các yêu cầu về độ ồn thấp của môi trường người sử dụng, một số mẫu ES430 có thiết kế không quạt để giảm ô nhiễm tiếng ồn. Sao lưu dự phòng, ổn định, độ tin cậy Hai cổng uplink Gigabit cho phép gộp cổng (link aggregation) tăng tốc độ và độ tin cậy Cung cấp PoE+, cung cấp năng lượng thông minh Mô hình PoE hỗ trợ nguồn PoE nâng cao (PoE+), cung cấp công suất đầu ra tối đa 30W mỗi cổng và có thể cấp nguồn cho các thiết bị tiêu thụ như AP WiFi, điện thoại video IP, camera... Hỗ trợ PoE nhanh, thiết bị có thể cung cấp nguồn cho đầu nhận 10s sau khi khởi động Hỗ trợ chức năng PoE thường trực, khi switch khởi động lại, thiết bị được cấp nguồn sẽ không bị tắt.",
      congMang:
        "16 cổng 10/100/1000Mbps tự thích ứng (Auto MDI/MDIX) 2 cổng SFP Gigabit",
      khaNangChuyenMach: "36Gbps",
      tocDoChuyenTiepGoi: "26.784Mpps",
      tinhNangVLan: ["Hỗ trợ port-based VLAN", "Hỗ trợ IEEE 802.3q VLAN"],
      dhcp: "Hỗ trợ IPv4/IPv6 DHCP client",
      quanLyCong: [
        "Hỗ trợ cấu hình web cho trạng thái cổng",
        "Hỗ trợ cấu hình web cho chức năng PoE",
      ],
      anToan: [
        "Hỗ trợ giới hạn tốc độ cổng",
        "Hỗ trợ DHCP Snooping",
        "Hỗ trợ ngăn chặn broadcast storm",
      ],
      tinhNangPoe: [
        "Hỗ trợ xem công suất PoE thời gian thực",
        "Hỗ trợ xem công suất PoE còn lại",
      ],
      quanLyVaVanHanh: [
        "Hỗ trợ quản lý bằng ImCloud",
        "Hỗ trợ Telnet",
        "Hỗ trợ cấu hình Web",
      ],
      tietKiemNangLuong: [
        "Hỗ trợ 802.3az Ethernet năng lượng hiệu quả",
        "Làm mát bằng quạt",
      ],
      kichThuoc: "330 x 220 x 44 mm",
      moiTruongSuDung: [
        "Nhiệt độ hoạt động: 0℃～55℃",
        "Nhiệt độ bảo quản: -40℃～70℃",
        "Độ ẩm hoạt động: độ ẩm tương đối 10%～90% (không ngưng tụ)",
      ],
      nguonVao: "AC 100-240VAC, 50/60Hz",
      congSuatTieuThu: [
        "Khi không cấp nguồn PoE: <9W",
        "Khi cấp nguồn PoE ra: ≤250W",
      ],
    },
    {
      productId: 4,
      caterogy: "cloud-platform",
      productName:
        "SWITCH QUẢN LÝ WEB THÔNG MINH 24 CỔNG 10/100/1000MBPS + 2 CỔNG SFP GIGABIT DCN ES430-26P-POE",
      price: 3583000,
      img: "es430_24.jpeg",
      detail:
        "Switch quản lý web thông minh 24 cổng 10/100/1000Mbps + 2 cổng SFP Gigabit DCN ES430-26P-POE. Switch dòng ES430 serie được trang bị công nghệ bảo vệ môi trường xanh tiên tiến và cung cấp các giải pháp Gigabit hiệu suất cao, dễ quản lý, chi phí thấp cho người dùng SMB vừa và nhỏ. Loạt sản phẩm này hỗ trợ quản lý đám mây thông minh ImCloud.",
      tinhNang:
        "Tiết kiệm năng lượng xanh, bảo vệ môi trường và độ ồn thấp Các switch dòng ES430 tuân thủ các tiêu chuẩn IEEE 802.3az (Ethernet hiệu quả năng lượng), giảm đáng kể mức tiêu thụ điện năng và đạt được mức bảo tồn năng lượng xanh Xem xét đầy đủ các yêu cầu về độ ồn thấp của môi trường người sử dụng, một số mẫu ES430 có thiết kế không quạt để giảm ô nhiễm tiếng ồn. Sao lưu dự phòng, ổn định, độ tin cậy Hai cổng uplink Gigabit cho phép gộp cổng (link aggregation) tăng tốc độ và độ tin cậy Cung cấp PoE+, cung cấp năng lượng thông minh Mô hình PoE hỗ trợ nguồn PoE nâng cao (PoE+), cung cấp công suất đầu ra tối đa 30W mỗi cổng và có thể cấp nguồn cho các thiết bị tiêu thụ như AP WiFi, điện thoại video IP, camera... Hỗ trợ PoE nhanh, thiết bị có thể cung cấp nguồn cho đầu nhận 10s sau khi khởi động Hỗ trợ chức năng PoE thường trực, khi switch khởi động lại, thiết bị được cấp nguồn sẽ không bị tắt.",
      congMang:
        "16 cổng 10/100/1000Mbps tự thích ứng (Auto MDI/MDIX) 2 cổng SFP Gigabit",
      khaNangChuyenMach: "36Gbps",
      tocDoChuyenTiepGoi: "26.784Mpps",
      tinhNangVLan: ["Hỗ trợ port-based VLAN", "Hỗ trợ IEEE 802.3q VLAN"],
      dhcp: "Hỗ trợ IPv4/IPv6 DHCP client",
      quanLyCong: [
        "Hỗ trợ cấu hình web cho trạng thái cổng",
        "Hỗ trợ cấu hình web cho chức năng PoE",
      ],
      anToan: [
        "Hỗ trợ giới hạn tốc độ cổng",
        "Hỗ trợ DHCP Snooping",
        "Hỗ trợ ngăn chặn broadcast storm",
      ],
      tinhNangPoe: [
        "Hỗ trợ xem công suất PoE thời gian thực",
        "Hỗ trợ xem công suất PoE còn lại",
      ],
      quanLyVaVanHanh: [
        "Hỗ trợ quản lý bằng ImCloud",
        "Hỗ trợ Telnet",
        "Hỗ trợ cấu hình Web",
      ],
      tietKiemNangLuong: [
        "Hỗ trợ 802.3az Ethernet năng lượng hiệu quả",
        "Làm mát bằng quạt",
      ],
      kichThuoc: "330 x 220 x 44 mm",
      moiTruongSuDung: [
        "Nhiệt độ hoạt động: 0℃～55℃",
        "Nhiệt độ bảo quản: -40℃～70℃",
        "Độ ẩm hoạt động: độ ẩm tương đối 10%～90% (không ngưng tụ)",
      ],
      nguonVao: "AC 100-240VAC, 50/60Hz",
      congSuatTieuThu: [
        "Khi không cấp nguồn PoE: <9W",
        "Khi cấp nguồn PoE ra: ≤250W",
      ],
    },
    {
      productId: 5,
      caterogy: "cloud-platform",
      productName:
        "SWITCH QUẢN LÝ WEB THÔNG MINH 16 CỔNG 10/100/1000MBPS + 2 CỔNG SFP GIGABIT DCN ES430-18P-POE",
      price: 3245000,
      img: "es430_16.jpeg",
      detail:
        "Switch quản lý web thông minh 16 cổng 10/100/1000Mbps + 2 cổng SFP Gigabit DCN ES430-26P-POE. Switch dòng ES430 serie được trang bị công nghệ bảo vệ môi trường xanh tiên tiến và cung cấp các giải pháp Gigabit hiệu suất cao, dễ quản lý, chi phí thấp cho người dùng SMB vừa và nhỏ. Loạt sản phẩm này hỗ trợ quản lý đám mây thông minh ImCloud.",
      tinhNang:
        "Tiết kiệm năng lượng xanh, bảo vệ môi trường và độ ồn thấp Các switch dòng ES430 tuân thủ các tiêu chuẩn IEEE 802.3az (Ethernet hiệu quả năng lượng), giảm đáng kể mức tiêu thụ điện năng và đạt được mức bảo tồn năng lượng xanh Xem xét đầy đủ các yêu cầu về độ ồn thấp của môi trường người sử dụng, một số mẫu ES430 có thiết kế không quạt để giảm ô nhiễm tiếng ồn. Sao lưu dự phòng, ổn định, độ tin cậy Hai cổng uplink Gigabit cho phép gộp cổng (link aggregation) tăng tốc độ và độ tin cậy Cung cấp PoE+, cung cấp năng lượng thông minh Mô hình PoE hỗ trợ nguồn PoE nâng cao (PoE+), cung cấp công suất đầu ra tối đa 30W mỗi cổng và có thể cấp nguồn cho các thiết bị tiêu thụ như AP WiFi, điện thoại video IP, camera... Hỗ trợ PoE nhanh, thiết bị có thể cung cấp nguồn cho đầu nhận 10s sau khi khởi động Hỗ trợ chức năng PoE thường trực, khi switch khởi động lại, thiết bị được cấp nguồn sẽ không bị tắt.",
      congMang:
        "16 cổng 10/100/1000Mbps tự thích ứng (Auto MDI/MDIX) 2 cổng SFP Gigabit",
      khaNangChuyenMach: "36Gbps",
      tocDoChuyenTiepGoi: "26.784Mpps",
      tinhNangVLan: ["Hỗ trợ port-based VLAN", "Hỗ trợ IEEE 802.3q VLAN"],
      dhcp: "Hỗ trợ IPv4/IPv6 DHCP client",
      quanLyCong: [
        "Hỗ trợ cấu hình web cho trạng thái cổng",
        "Hỗ trợ cấu hình web cho chức năng PoE",
      ],
      anToan: [
        "Hỗ trợ giới hạn tốc độ cổng",
        "Hỗ trợ DHCP Snooping",
        "Hỗ trợ ngăn chặn broadcast storm",
      ],
      tinhNangPoe: [
        "Hỗ trợ xem công suất PoE thời gian thực",
        "Hỗ trợ xem công suất PoE còn lại",
      ],
      quanLyVaVanHanh: [
        "Hỗ trợ quản lý bằng ImCloud",
        "Hỗ trợ Telnet",
        "Hỗ trợ cấu hình Web",
      ],
      tietKiemNangLuong: [
        "Hỗ trợ 802.3az Ethernet năng lượng hiệu quả",
        "Làm mát bằng quạt",
      ],
      kichThuoc: "330 x 220 x 44 mm",
      moiTruongSuDung: [
        "Nhiệt độ hoạt động: 0℃～55℃",
        "Nhiệt độ bảo quản: -40℃～70℃",
        "Độ ẩm hoạt động: độ ẩm tương đối 10%～90% (không ngưng tụ)",
      ],
      nguonVao: "AC 100-240VAC, 50/60Hz",
      congSuatTieuThu: [
        "Khi không cấp nguồn PoE: <9W",
        "Khi cấp nguồn PoE ra: ≤250W",
      ],
    },
    {
      productId: 6,
      caterogy: "cloud-platform",
      productName:
        "SWITCH QUẢN LÝ WEB THÔNG MINH 8 CỔNG 10/100/1000MBPS + 2 CỔNG SFP GIGABIT DCN ES430-18P-POE",
      price: 1960000,
      img: "es430_8.jpeg",
      detail:
        "Switch quản lý web thông minh 16 cổng 10/100/1000Mbps + 2 cổng SFP Gigabit DCN ES430-26P-POE. Switch dòng ES430 serie được trang bị công nghệ bảo vệ môi trường xanh tiên tiến và cung cấp các giải pháp Gigabit hiệu suất cao, dễ quản lý, chi phí thấp cho người dùng SMB vừa và nhỏ. Loạt sản phẩm này hỗ trợ quản lý đám mây thông minh ImCloud.",
      tinhNang:
        "Tiết kiệm năng lượng xanh, bảo vệ môi trường và độ ồn thấp Các switch dòng ES430 tuân thủ các tiêu chuẩn IEEE 802.3az (Ethernet hiệu quả năng lượng), giảm đáng kể mức tiêu thụ điện năng và đạt được mức bảo tồn năng lượng xanh Xem xét đầy đủ các yêu cầu về độ ồn thấp của môi trường người sử dụng, một số mẫu ES430 có thiết kế không quạt để giảm ô nhiễm tiếng ồn. Sao lưu dự phòng, ổn định, độ tin cậy Hai cổng uplink Gigabit cho phép gộp cổng (link aggregation) tăng tốc độ và độ tin cậy Cung cấp PoE+, cung cấp năng lượng thông minh Mô hình PoE hỗ trợ nguồn PoE nâng cao (PoE+), cung cấp công suất đầu ra tối đa 30W mỗi cổng và có thể cấp nguồn cho các thiết bị tiêu thụ như AP WiFi, điện thoại video IP, camera... Hỗ trợ PoE nhanh, thiết bị có thể cung cấp nguồn cho đầu nhận 10s sau khi khởi động Hỗ trợ chức năng PoE thường trực, khi switch khởi động lại, thiết bị được cấp nguồn sẽ không bị tắt.",
      congMang:
        "16 cổng 10/100/1000Mbps tự thích ứng (Auto MDI/MDIX) 2 cổng SFP Gigabit",
      khaNangChuyenMach: "36Gbps",
      tocDoChuyenTiepGoi: "26.784Mpps",
      tinhNangVLan: ["Hỗ trợ port-based VLAN", "Hỗ trợ IEEE 802.3q VLAN"],
      dhcp: "Hỗ trợ IPv4/IPv6 DHCP client",
      quanLyCong: [
        "Hỗ trợ cấu hình web cho trạng thái cổng",
        "Hỗ trợ cấu hình web cho chức năng PoE",
      ],
      anToan: [
        "Hỗ trợ giới hạn tốc độ cổng",
        "Hỗ trợ DHCP Snooping",
        "Hỗ trợ ngăn chặn broadcast storm",
      ],
      tinhNangPoe: [
        "Hỗ trợ xem công suất PoE thời gian thực",
        "Hỗ trợ xem công suất PoE còn lại",
      ],
      quanLyVaVanHanh: [
        "Hỗ trợ quản lý bằng ImCloud",
        "Hỗ trợ Telnet",
        "Hỗ trợ cấu hình Web",
      ],
      tietKiemNangLuong: [
        "Hỗ trợ 802.3az Ethernet năng lượng hiệu quả",
        "Làm mát bằng quạt",
      ],
      kichThuoc: "330 x 220 x 44 mm",
      moiTruongSuDung: [
        "Nhiệt độ hoạt động: 0℃～55℃",
        "Nhiệt độ bảo quản: -40℃～70℃",
        "Độ ẩm hoạt động: độ ẩm tương đối 10%～90% (không ngưng tụ)",
      ],
      nguonVao: "AC 100-240VAC, 50/60Hz",
      congSuatTieuThu: [
        "Khi không cấp nguồn PoE: <9W",
        "Khi cấp nguồn PoE ra: ≤250W",
      ],
    },
    {
      productId: 7,
      caterogy: "cloud-platform",
      productName:
        "SWITCH KHÔNG QUẢN LÝ 48 CỔNG 10/100/1000MBPS + 2 CỔNG SFP GIGABIT DCN ES1250G",
      price: 9329000,
      img: "es1250g.jpeg",
      detail:
        "Switch ES1250G là sản phẩm thiết kế tích hợp cao, dễ vận hành, phù hợp với mạng văn phòng và gia đình cỡ vừa và nhỏ.",
      tinhNang:
        "Tuân thủ các chuẩn IEEE 802.3i, IEEE 802.3u, IEEE802.3ab, IEEE802.3x Hỗ trợ các chuẩn PoE IEEE 802.3af và 802.3at Công suất tiêu thụ tối đa của mỗi cổng 30W, và tổng công suất tiêu thụ tối đa lên đến 330W Hỗ trợ chuyển đổi các chế độ: thông thường, cô lập cổng, và chế độ mở rộng mạng Chế độ điều khiển luồng (flow control): full-duplex theo chuẩn IEEE802.3x, và half-duplex theo chuẩn Back-pressure Hỗ trợ tự học địa chỉ MAC 48 cổng 10/100/1000Mbps tự thích ứng, Auto MDI/MDIX 2 cổng SFP 100/1000Mbps Cổng UTP hỗ trợ tính năng tự đàm phán, tự chuyển đổi chế độ và tốc độ truyền",
      congMang:
        "16 cổng 10/100/1000Mbps tự thích ứng (Auto MDI/MDIX) 2 cổng SFP Gigabit",
      khaNangChuyenMach: "36Gbps",
      tocDoChuyenTiepGoi: "26.784Mpps",
      tinhNangVLan: ["Hỗ trợ port-based VLAN", "Hỗ trợ IEEE 802.3q VLAN"],
      dhcp: "Hỗ trợ IPv4/IPv6 DHCP client",
      quanLyCong: [
        "Hỗ trợ cấu hình web cho trạng thái cổng",
        "Hỗ trợ cấu hình web cho chức năng PoE",
      ],
      anToan: [
        "Hỗ trợ giới hạn tốc độ cổng",
        "Hỗ trợ DHCP Snooping",
        "Hỗ trợ ngăn chặn broadcast storm",
      ],
      tinhNangPoe: [
        "Hỗ trợ xem công suất PoE thời gian thực",
        "Hỗ trợ xem công suất PoE còn lại",
      ],
      quanLyVaVanHanh: [
        "Hỗ trợ quản lý bằng ImCloud",
        "Hỗ trợ Telnet",
        "Hỗ trợ cấu hình Web",
      ],
      tietKiemNangLuong: [
        "Hỗ trợ 802.3az Ethernet năng lượng hiệu quả",
        "Làm mát bằng quạt",
      ],
      kichThuoc: "330 x 220 x 44 mm",
      moiTruongSuDung: [
        "Nhiệt độ hoạt động: 0℃～55℃",
        "Nhiệt độ bảo quản: -40℃～70℃",
        "Độ ẩm hoạt động: độ ẩm tương đối 10%～90% (không ngưng tụ)",
      ],
      nguonVao: "AC 100-240VAC, 50/60Hz",
      congSuatTieuThu: [
        "Khi không cấp nguồn PoE: <9W",
        "Khi cấp nguồn PoE ra: ≤250W",
      ],
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateListProducts(state, action) {
      state.listProducts = action.payload;
    },
  },
});

export const { updateListProducts } = dataSlice.actions;
export default dataSlice.reducer;
