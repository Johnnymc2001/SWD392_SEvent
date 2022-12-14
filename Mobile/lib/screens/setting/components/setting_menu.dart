import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';


class ProfileMenu extends StatelessWidget {
  const ProfileMenu({
     Key? key,
    required this.text,
    required this.icon,
    required this.press,
  }) : super(key: key);

  final String text,icon;
  final VoidCallback press;

  get kPirmaryColor => null;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20,vertical: 10),
      child: FlatButton(
        padding: const EdgeInsets.all(20),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
        color: const Color(0xFFF5F6F9),
        onPressed: press,
        child: Row(
          children: [
            SvgPicture.asset(
              icon,
              width:22 ,
              color: kPirmaryColor,
            ),
            const SizedBox(width: 20),
            Expanded(child: Text(text, style: Theme.of(context).textTheme.bodyText1,
            )
            ),
            const Icon(Icons.arrow_forward_ios)
          ],
        ),
      ),
    );
  }
}

class SettingMenu extends StatelessWidget {
  const SettingMenu({
    Key? key,
    required this.text,
    required this.icon,
    required this.press,
  }) : super(key: key);

  final String text,icon;
  final VoidCallback press;

  get kPirmaryColor => null;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20,vertical: 10),
      child: FlatButton(
        padding: const EdgeInsets.all(20),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
        color: const Color(0xFFF5F6F9),
        onPressed: press,
        child: Row(
          children: [
            SvgPicture.asset(
              icon,
              width:22 ,
              color: kPirmaryColor,
            ),
            const SizedBox(width: 20),
            Expanded(child: Text(text, style: Theme.of(context).textTheme.bodyText1,
            )
            ),
            const Icon(Icons.arrow_forward_ios)
          ],
        ),
      ),
    );
  }
}

class PolicyMenu extends StatelessWidget {
  const PolicyMenu({
    Key? key,
    required this.text,
    required this.icon,
    required this.press,
  }) : super(key: key);

  final String text,icon;
  final VoidCallback press;

  get kPirmaryColor => null;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20,vertical: 10),
      child: FlatButton(
        padding: const EdgeInsets.all(20),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
        color: const Color(0xFFF5F6F9),
        onPressed: press,
        child: Row(
          children: [
            SvgPicture.asset(
              icon,
              width:22 ,
              color: kPirmaryColor,
            ),
            const SizedBox(width: 20),
            Expanded(child: Text(text, style: Theme.of(context).textTheme.bodyText1,
            )
            ),
            const Icon(Icons.arrow_forward_ios)
          ],
        ),
      ),
    );
  }
}

class TicketMenu extends StatelessWidget {
  const TicketMenu({
    Key? key,
    required this.text,
    required this.icon,
    required this.press,
  }) : super(key: key);

  final String text,icon;
  final VoidCallback press;

  get kPirmaryColor => null;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20,vertical: 10),
      child: FlatButton(
        padding: const EdgeInsets.all(20),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
        color: const Color(0xFFF5F6F9),
        onPressed: press,
        child: Row(
          children: [
            SvgPicture.asset(
              icon,
              width:22 ,
              color: kPirmaryColor,
            ),
            const SizedBox(width: 20),
            Expanded(child: Text(text, style: Theme.of(context).textTheme.bodyText1,
            )
            ),
            const Icon(Icons.arrow_forward_ios)
          ],
        ),
      ),
    );
  }
}

