"""Copy and optimise portfolio images.

Every image on the site is listed in MANIFEST below: a source file on disk and the
web path it is published under (public/images/...). The script resizes each one to a
maximum width, fixes EXIF orientation, strips metadata and writes WebP.

To replace or add a photo:
  1. add or edit a line in MANIFEST (or drop a ready .webp/.jpg directly in public/images/),
  2. run `npm run images`,
  3. reference the web path in src/content (projects.ts or site.ts).

Paths are relative to SOURCE_ROOT unless absolute.
"""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageOps

HOME = Path.home()
SOURCE_ROOT = HOME / "OneDrive - SUPCOM"
PROJECT = Path(__file__).resolve().parent.parent
REPORT_FIGURES = PROJECT / "assets-src" / "report-figures"  # figures extracted from the PDF reports
OUT = PROJECT / "public" / "images"

# (source, destination under public/images, max width)
MANIFEST: list[tuple[str, str, int]] = [
    # Safran internship (figures from the internship report; the students table is left out because it shows real emails)
    ("report-figures/safran/p29_4.png", "internships/safran/activities.webp", 1450),
    ("report-figures/safran/p26_4.png", "internships/safran/email-html.webp", 917),
    ("report-figures/safran/p25_6.png", "internships/safran/postman-activity.webp", 690),
    ("report-figures/safran/p27_5.png", "internships/safran/signup.webp", 1064),
    ("report-figures/safran/p22_3.png", "internships/safran/project-structure.webp", 298),
    # Portrait she provided (2026-11-22)
    (str(PROJECT / "assets-src/portrait/yassmine-el-arbi.jpg"), "portrait/yassmine-el-arbi.webp", 900),
    # Company logos (files she provided, trimmed to the mark)
    (str(PROJECT / "assets-src/logos/amen-invest-trim.png"), "logos/amen-invest.webp", 480),
    (str(PROJECT / "assets-src/logos/somef-trim.png"), "logos/somef.webp", 300),
    (str(PROJECT / "assets-src/logos/safran-trim.png"), "logos/safran.webp", 480),
    # Project covers she chose (2026-11-22)
    (str(PROJECT / "assets-src/covers/demand-response-assistant.jpg"), "projects/demand-response/cover-assistant.webp", 1600),
    (str(PROJECT / "assets-src/covers/glutino-home.png"), "projects/glutino/cover-home.webp", 700),
    (str(PROJECT / "assets-src/covers/supflow-dashboard.png"), "projects/supflow/cover-dashboard.webp", 1600),
    # Relational database project (figures from the final report)
    ("report-figures/bdd/p07_0.png", "projects/finance-database/conceptual-schema.webp", 1400),
    ("report-figures/bdd/p10_0.png", "projects/finance-database/query-orders.webp", 900),
    ("report-figures/bdd/p27_0.png", "projects/finance-database/query-top-products.webp", 900),
    # Glutino (slides from the MIT Startup Studio presentation, use case diagram from the mobile project)
    ("report-figures/glutino/startup-p01-cover.png", "projects/glutino/cover.webp", 1600),
    ("report-figures/glutino/startup-p05-features.png", "projects/glutino/features.webp", 1600),
    ("report-figures/glutino/startup-p06-mvp.png", "projects/glutino/mvp.webp", 1600),
    ("2-2éme année/p2/mobile/Produit.png", "projects/glutino/use-case.webp", 1100),
    # SupFlow (frames from the demo video "demo supflow vf.mp4", cropped to the app)
    ("report-figures/supflow/demo-099.png", "projects/supflow/dashboard.webp", 1600),
    ("report-figures/supflow/demo-158.png", "projects/supflow/projects.webp", 1600),
    ("report-figures/supflow/demo-148.png", "projects/supflow/create-project.webp", 1600),
    ("report-figures/supflow/demo-267.png", "projects/supflow/kanban.webp", 1600),
    ("report-figures/supflow/demo-280.png", "projects/supflow/sprint.webp", 1600),
    ("report-figures/supflow/demo-291.png", "projects/supflow/work-logs.webp", 1600),
    # Industrial defect detection (SOMEF)
    ("report-figures/somef/p16_205.png", "projects/defect-detection/bench-side.webp", 1600),
    ("report-figures/somef/p15_199.png", "projects/defect-detection/bench-top.webp", 1200),
    ("6-Stage/Stage 2éme/lumina/app/results/Padim/latest/images/tmp14_hp6n4/piece.png", "projects/defect-detection/padim-anomaly-map.webp", 1600),
    ("6-Stage/Stage 2éme/lumina/cnn/Grad-CAM_-_NOK_bien_detectes.png", "projects/defect-detection/gradcam.webp", 1600),
    ("report-figures/somef/p24_255.png", "projects/defect-detection/confusion-svm.webp", 900),
    ("report-figures/somef/p26_263.png", "projects/defect-detection/confusion-cnn.webp", 900),
    # Demand response
    ("4-MIT/digital grid/chatbot/demand-response/outputs/d1_forecast.png", "projects/demand-response/d1-forecast.webp", 1600),
    ("4-MIT/digital grid/chatbot/demand-response/outputs/forecast_audit/community_good.png", "projects/demand-response/community-forecast.webp", 1600),
    ("4-MIT/digital grid/chatbot/demand-response/outputs/demand_vs_production.png", "projects/demand-response/demand-vs-production.webp", 1600),
    # Support agent (AWS)
    ("4-MIT/projet_AWS/capture/stepfunctions_graph.png", "projects/support-agent/step-functions.webp", 900),
    ("4-MIT/projet_AWS/capture/execution de state machine.png", "projects/support-agent/state-machine-run.webp", 1600),
    ("4-MIT/projet_AWS/capture/les requetes athena (1).png", "projects/support-agent/athena-queries.webp", 1600),
    ("4-MIT/projet_AWS/capture/exploration de dataset graph.png", "projects/support-agent/dataset-exploration.webp", 1600),
    # Regulatory knowledge base (BNI-AI)
    ("5-projet tutoré/presentation/apercu/diapo-10.png", "projects/knowledge-base/interface.webp", 1600),
    ("5-projet tutoré/presentation/apercu/diapo-05.png", "projects/knowledge-base/architecture.webp", 1600),
    ("5-projet tutoré/presentation/apercu/diapo-08.png", "projects/knowledge-base/progress.webp", 1600),
    # CURE medical blockchain (P2M)
    ("report-figures/p2m/p20_51.png", "projects/cure/home.webp", 1600),
    ("report-figures/p2m/p11_27.png", "projects/cure/sequence-diagram.webp", 1400),
    ("report-figures/p2m/p10_24.png", "projects/cure/class-diagram.webp", 1200),
    # Events
    ("images/TSYP/IMG_5387.JPG", "events/tsyp12-wie-star.webp", 1400),
    ("Club/Wie IEEE/final posts/photo wiempower oc and managers/1.png", "events/wiempower.webp", 1600),
]


def resolve(src: str) -> Path:
    if src.startswith("report-figures/"):
        return REPORT_FIGURES / src.removeprefix("report-figures/")
    p = Path(src)
    return p if p.is_absolute() else SOURCE_ROOT / p


def main() -> int:
    failed = 0
    for src, dest, max_w in MANIFEST:
        s, d = resolve(src), OUT / dest
        if not s.exists():
            print(f"MISSING  {s}")
            failed += 1
            continue
        d.parent.mkdir(parents=True, exist_ok=True)
        im = ImageOps.exif_transpose(Image.open(s))
        im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
        if im.width > max_w:
            im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
        im.save(d, "WEBP", quality=82, method=6)
        print(f"ok  {d.relative_to(OUT)}  {im.width}x{im.height}  {d.stat().st_size // 1024} KB")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
