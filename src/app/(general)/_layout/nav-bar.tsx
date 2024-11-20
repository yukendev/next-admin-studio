import { MODELS, type ModelName, ModelPathMapping } from "@/model/common/const";
import {
  Box,
  Flex,
  NavLink as NavLinkPrimitive,
  type NavLinkProps,
  ScrollArea,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { type Icon, IconFile, type IconProps } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC, ForwardRefExoticComponent, RefAttributes } from "react";

type NavGroup = {
  label: string;
  links: NavLink[];
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
};

type NavLink = {
  label: string;
  path: string;
};

const getNavBarItem = (model: ModelName): NavLink => ({
  label: MODELS[model].label,
  path: ModelPathMapping[model].indexPath,
});

const NAV_GROUPS: NavGroup[] = [
  {
    label: "コンテンツ",
    icon: IconFile,
    links: [getNavBarItem("ProfileCard")],
  },
];

export const NavBar = () => {
  return (
    <ScrollArea scrollbarSize="none" px="sm">
      <Stack gap="lg" c="gray.7">
        <Box>
          <Box>
            <NavLink
              key="/"
              label="トップ"
              href="/"
              pl="md"
              hasBorder={false}
            />
          </Box>
        </Box>
        {NAV_GROUPS.map((nav) => (
          <Box key={nav.label} fz="sm">
            <Flex
              align="center"
              gap="xs"
              pl="md"
              bg="gray.0"
              py="xs"
              style={{
                borderLeft: "1px solid var(--mantine-color-gray-3)",
              }}
            >
              <nav.icon size="1rem" stroke={1.5} color="gray" />
              <Text c="gray" fz="sm">
                {nav.label}
              </Text>
            </Flex>
            <Space
              h={8}
              style={{
                borderLeft: "1px solid var(--mantine-color-gray-3)",
              }}
            />
            {nav.links.map((link) => (
              <NavLink
                key={link.path}
                label={link.label}
                href={link.path}
                pl="md"
              />
            ))}
          </Box>
        ))}
        <Space h="lg" />
      </Stack>
    </ScrollArea>
  );
};

const NavLink: FC<NavLinkProps & { href: string; hasBorder?: boolean }> = ({
  hasBorder = true,
  ...props
}) => {
  const pathname = usePathname();

  // ルートパス ('/') の場合は完全一致が必要
  const isRootPath = props.href === "/";
  const isActive = isRootPath
    ? pathname === props.href
    : pathname.startsWith(props.href);

  return (
    <NavLinkPrimitive
      active={isActive}
      component={Link}
      style={{
        borderLeft: hasBorder ? "1px solid" : "none",
        borderColor: isActive
          ? "var(--mantine-color-primary)"
          : "var(--mantine-color-gray-3)",
        fontWeight: isActive ? "bold" : "normal",
      }}
      {...props}
    />
  );
};
