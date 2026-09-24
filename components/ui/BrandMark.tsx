import Image from "next/image";

export function BrandMark({ inverse = false, priority = false }: { inverse?: boolean; priority?: boolean }) {
  return (
    <span className="brand-logo" data-inverse={inverse}>
      <Image
        src={inverse ? "/site-assets/charitr-logo-dark.png" : "/site-assets/charitr-logo-dark.png"}
        alt=""
        width={3020}
        height={606}
        priority={priority}
        unoptimized
        sizes="(max-width: 600px) 180px, 220px"
      />
    </span>
  );
}
